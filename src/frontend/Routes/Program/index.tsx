import React, { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Menu } from '@headlessui/react';
import gradientArray from '../../styles/gradientArray';
import { ReactComponent as Close } from '../../styles/images/x.svg';
import H1 from '../../component/font/H1';
import H3 from '../../component/font/H3';
import P from '../../component/font/P';
import ST from '../../component/font/SmallText';
import Circle from '../../component/Circle';
import Card from '../../component/Card';
import Button from '../../component/Button';
import { ID } from 'graphql-modules/shared/types';

type ProgramProps = {
  program: {
    id: ID;
    description: string;
    difficulty: string;
    focus: string;
    image: {
      url: string;
    };
    name: string;
    weeks: {
      id: ID;
      title: string;
      workouts: {
        id: ID;
        name: string;
      };
    };
  };
};

const Program = () => {
  const { id } = useParams();
  const PROGRAM_QUERY = gql`
    query GetProgram($id: ID!) {
      program(where: { id: $id }) {
        description
        difficulty
        focus
        id
        image {
          url
        }
        name
        weeks {
          id
          title
          workouts {
            id
            name
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(PROGRAM_QUERY, {
    variables: { id },
  });
  if (loading) return <p className="text-light text-center">loading ...</p>;
  if (error) return <p className="text-light text-center">error :/ </p>;
  const backgroundImage = {
    backgroundImage: `url(${data.program.image.url})`,
    height: '70vh',
    backgroundSize: 'cover',
  };
  const extractWorkouts = (week: {
    id: ID;
    title: string;
    workouts: { id: ID; name: string }[];
  }): ReactNode =>
    week.workouts.map((workout) => (
      <li className="flex flex-col gap-y-4 py-2">
        <P>{workout.name}</P>
      </li>
    ));
  const weekOverview = data.program.weeks
    .map((week, i) => ({
      ...week,
      gradient: gradientArray[i % gradientArray.length],
    }))
    .map((week) => {
      return (
        <li>
          <Card key={week.id} className="flex gap-x-3">
            <div
              className={` w-1/4 ${week.gradient} rounded-tl-[30px] rounded-bl-[30px]`}
            ></div>
            <div className="flex flex-col gap-y-4 py-2">
              <H3>{week.title}</H3>
              <Menu>
                <Menu.Button>
                  <ST className="text-left">Workouts anzeigen</ST>
                </Menu.Button>
                <Menu.Items>
                  <hr />
                  <ul>{extractWorkouts(week)}</ul>
                </Menu.Items>
              </Menu>
            </div>
          </Card>
        </li>
      );
    });
  return (
    <>
      <header>
        <section
          className="flex flex-col justify-end items-center px-5 text-center"
          style={backgroundImage}
        >
          <Link type="button" to="/browse" className="absolute top-6 right-6">
            <Close />
          </Link>
          <H1>{data.program.name}</H1>
          <div className="flex justify-around w-full items-end pb-5 h-1/2">
            <div className="flex flex-col items-center gap-y-2">
              <Circle className="w-8 h-8 bg-gradient-to-br from-gradient1A to-gradient1B" />
              <ST>{data.program.focus}</ST>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <Circle className="w-8 h-8 bg-gradient-to-br from-gradient2A to-gradient2B" />
              <ST>{data.program.difficulty}</ST>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <Circle className="w-8 h-8 bg-gradient-to-br from-gradient3A via-gradient3B to-gradient3C" />
              <ST>{data.program.duration} weeks</ST>
            </div>
          </div>
        </section>
      </header>
      <main className="relative overflow-auto">
        <section className="px-5 py-5 bg-medium">
          <P>{data.program.description}</P>
        </section>
        <section className="px-5 py-5">
          <H3>So ist das Programm aufgeteilt:</H3>
        </section>
        <section className="px-5 py-5">
          <div className="flex justify-between items-center">
            <H3>{data.program.weeks.length} Weeks</H3>
          </div>
          <ul className="flex flex-col gap-y-2">{weekOverview}</ul>
        </section>
        <section className="fixed bottom-10 right-1/2 transform translate-x-1/2">
          <Button>jetzt starten</Button>
        </section>
      </main>
    </>
  );
};

export default Program;
