import React from 'react';
import { useParams } from 'react-router-dom';
import H1 from '../../component/font/H1';
import { gql, useQuery } from '@apollo/client';
import ST from '../../component/font/SmallText';
import P from '../../component/font/P';
import Circle from '../../component/Circle'

type ProgramProps = {};

const Program = () => {
  const { id } = useParams();
  const PROGRAM_QUERY = gql`
    query GetProgram($id: ID!) {
      program(where: {id: $id}) {
        description
        difficulty
        focus
        duration
        id
        image {
          url
        }
        name
        workouts {
          id
          name
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(PROGRAM_QUERY, {variables: {id}});
  if (loading) return <p className="text-light text-center">loading ...</p>;
  if (error) return <p className="text-light text-center">error :/ </p>;
  const backgroundImage = {
    backgroundImage: `url(${data.program.image.url})`,
    height: '70vh',
    backgroundSize: 'cover'
  }
  return (
    <>
      <header className='h-[514px]'>
        <section className="flex flex-col justify-end items-center h-full px-5 text-center" style={backgroundImage}>
          <H1>{data.program.name}</H1>
          <div className="flex justify-around w-full items-end pb-5 h-1/2">
            <div className='flex flex-col items-center gap-y-2'>
              <Circle className='w-8 h-8 bg-gradient-to-br from-gradient1A to-gradient1B'/>
              <ST>{data.program.focus}</ST>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <Circle className='w-8 h-8 bg-gradient-to-br from-gradient2A to-gradient2B'/>
              <ST>{data.program.difficulty}</ST>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <Circle className='w-8 h-8 bg-gradient-to-br from-gradient3A via-gradient3B to-gradient3C'/>
              <ST>{data.program.duration} weeks</ST>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className='px-5 py-5 bg-medium'>
          <P>{data.program.description}</P>
        </section>
      </main>
    </>
  );
};

export default Program;
