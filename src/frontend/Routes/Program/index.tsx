import React, { ReactNode, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Menu, Transition } from '@headlessui/react';
import gradientArray from '../../styles/gradientArray';
import { ReactComponent as Close } from '../../styles/images/svg/x.svg';
import { ReactComponent as ExpandLess } from '../../styles/images/svg/expandLess.svg';
import { ReactComponent as ExpandMore } from '../../styles/images/svg/expandMore.svg';
import H1 from '../../Component/font/H1';
import H3 from '../../Component/font/H3';
import P from '../../Component/font/P';
import ST from '../../Component/font/SmallText';
import Circle from '../../Component/Circle';
import Card from '../../Component/Card';
import Button from '../../Component/Button';
import { ID } from 'graphql-modules/shared/types';
import WorkoutModal from '../../Component/WorkoutModal';

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
    weeks: WeekProps;
  };
};

type WeekProps = {
  id: ID;
  title: string;
  workouts: WorkoutProps[];
};

type WorkoutProps = {
  id: ID;
  name: string;
  duration: number;
  category: string;
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
            duration
            category
            exercises {
              ... on ExerciseWithDuration {
                id
                exercise {
                  name
                  description
                }
                duration
              }
              ... on ExerciseWithReps {
                id
                exercise {
                  name
                  description
                }
                reps
              }
            }
          }
        }
      }
    }
  `;

  let [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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

  const progressWorkout = data.program.weeks[0].workouts[0];

  const extractWorkouts = (week: WeekProps): ReactNode =>
    week.workouts.map((workout) => (
      <li key={workout.id} className="flex items-baseline gap-x-2">
        <P>{workout.name}</P>·<ST>{workout.duration} min</ST>
      </li>
    ));
  const weekOverview = data.program.weeks
    .map((week, i) => ({
      ...week,
      gradient: gradientArray[i % gradientArray.length],
    }))
    .map((week) => {
      return (
        <li key={week.id}>
          <Card className="flex gap-x-3">
            <div
              className={` w-1/4 ${week.gradient} rounded-tl-[30px] rounded-bl-[30px]`}
            ></div>
            <div className="flex flex-col py-2 gap-y-2">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="text-left w-full">
                      <div className="flex items-center gap-x-1">
                        <H3>{week.title}</H3>
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </div>
                      <ST>{week.workouts.length} Workouts</ST>
                    </Menu.Button>
                    <Menu.Items>
                      <ul className="flex flex-col gap-y-3">
                        {extractWorkouts(week)}
                      </ul>
                    </Menu.Items>
                  </>
                )}
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
          {!isOpen ? (
            <Button
              onClick={toggleModal}
              className="bg-gradient-to-br from-gradient1A to-gradient1B"
            >
              jetzt starten
            </Button>
          ) : (
            <WorkoutModal
              workout={progressWorkout}
              handler={toggleModal}
              isOpen={isOpen}
              setIsOpen={() => {
                setIsOpen(false);
              }}
              title={data.program?.name}
              subtitle={progressWorkout.name}
              week={data.program.weeks[0].title}
              information={`${progressWorkout.duration} Minutes · ${progressWorkout.category}`}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Program;
