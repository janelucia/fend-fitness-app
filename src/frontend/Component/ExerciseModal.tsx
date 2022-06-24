import { Dialog } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Close } from '../styles/images/svg/x.svg';
import { ReactComponent as ArrowLeft } from '../styles/images/svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../styles/images/svg/arrowRight.svg';
import H1 from './font/H1';
import H2 from './font/H2';

export const ExerciseModal = ({ handler, workout }) => {
  const currentWorkout = workout;

  const [seconds, setSeconds] = useState(currentWorkout.exercises[0].duration);
  const timerId = useRef();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
      console.log(timerId.current);
      if (seconds <= 0) {
        clearInterval(timerId.current);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    console.log(timerId.current);
  }, []);

  return (
    <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-center h-full">
      <button onClick={handler} className="absolute top-2 right-2">
        <Close />
      </button>
      <section className="flex w-full justify-between">
        <button>
          <ArrowLeft />
        </button>
        <div className="flex flex-col gap-y-6">
          <H1>{seconds} sec</H1>
          <H2>{currentWorkout.exercises[0].exercise.name}</H2>
        </div>
        <button className="">
          <ArrowRight />
        </button>
      </section>
    </Dialog.Panel>
  );
};
