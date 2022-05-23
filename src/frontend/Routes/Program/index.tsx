import React from 'react';
import { useParams } from 'react-router-dom';
import H1 from '../../component/font/H1';
import { gql, useQuery } from '@apollo/client';
import ST from '../../component/font/SmallText';
import P from '../../component/font/P';

type ProgramProps = {};

const Program = () => {
  const { id } = useParams();
  const PROGRAM_QUERY = gql`
    query GetProgram {
      program(where: {id: "${id}"}) {
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
  const { loading, error, data } = useQuery(PROGRAM_QUERY);
  if (loading) return <p className="text-light text-center">loading ...</p>;
  if (error) return <p className="text-light text-center">error :/ </p>;
  return (
    <>
      <header>
        <section className="flex flex-col justify-center items-center h-[514px]">
          <H1>{data.program.name}</H1>
          <div className="flex justify-around w-full items-end h-full pb-5">
            <ST>{data.program.focus}</ST>
            <ST>{data.program.difficulty}</ST>
            <ST>{data.program.duration} weeks</ST>
          </div>
        </section>
      </header>
      <main>
        <section>
          <P>{data.program.description}</P>
        </section>
      </main>
    </>
  );
};

export default Program;
