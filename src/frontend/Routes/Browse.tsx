import React from 'react';
import Navi from '../component/Navi';
import H2 from '../component/font/H2';
import Card from '../component/Card';
import gradientArray from '../styles/gradientArray';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

type Programs = {
  id: number;
  name: string;
  gradient?: string;
};

const PROGRAMS_QUERY = gql`
  query GetPrograms {
    programs {
      id
      name
    }
  }
`;

const ProgramQuery = () => {
  const { loading, error, data } = useQuery(PROGRAMS_QUERY);
  if (loading) return <p className="text-light text-center">loading ...</p>;
  if (error) return <p className="text-light text-center">error :/ </p>;

  return data.programs
    .map((program: Programs, i: number) => ({
      ...program,
      gradient: gradientArray[i % gradientArray.length],
    }))
    .map(({ id, name, gradient }: Programs) => {
      return (
        <li key={id}>
          <Link to={`program/${id}`}>
            <Card
              className={`h-52 p-5 flex items-center justify-center ${gradient}`}
            >
              <H2>{name}</H2>
            </Card>
          </Link>
        </li>
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
        <ul className="flex flex-col gap-y-4">
          <ProgramQuery />
        </ul>
      </main>
      <footer>
        <Navi />
      </footer>
    </>
  );
};

export default Browse;
