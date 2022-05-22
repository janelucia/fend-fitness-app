import React from 'react';
import Navi from '../component/Navi';
import H2 from '../component/font/H2';
import Card from '../component/Card';
import { gql, useQuery } from '@apollo/client';
import { render } from 'react-dom';

type Program = {
  id: number;
  name: string;
  gradient?: string;
};

const PROGRAM_QUERY = gql`
  query GetPrograms {
    programs {
      id
      name
    }
  }
`;

const gradientArray = [
  'bg-gradient-to-br from-gradient1A to-gradient1B',
  'bg-gradient-to-br from-gradient2A to-gradient2B',
  'bg-gradient-to-br from-gradient3A via-gradient3B to-gradient3C',
];

const ProgramQuery = () => {
  const { loading, error, data } = useQuery(PROGRAM_QUERY);
  if (loading) return <p className="text-light text-center">loading ...</p>;
  if (error) return <p className="text-light text-center">error :/ </p>;

  return data.programs
    .map((program: Program, i: number) => ({
      ...program,
      gradient: gradientArray[i % gradientArray.length],
    }))
    .map(({ id, name, gradient }: Program) => {
      return (
        <Card
          key={id}
          className={`h-52 p-5 flex items-center justify-center ${gradient}`}
        >
          <H2>{name}</H2>
        </Card>
      );
    });
};

const Browse = () => {
  return (
    <>
      <header className="m-5 h-24 flex items-center">
        <H2>Browse</H2>
      </header>
      <main className="m-5 flex flex-col gap-y-5">
        <ProgramQuery />
      </main>
      <footer>
        <Navi />
      </footer>
    </>
  );
};

export default Browse;
