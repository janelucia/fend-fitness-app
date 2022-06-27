import { Dialog } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Close } from '../styles/images/svg/x.svg';
import { ReactComponent as ArrowLeft } from '../styles/images/svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../styles/images/svg/arrowRight.svg';
import { CircularProgress } from './CircularProgress';
import H1 from './font/H1';
import H2 from './font/H2';

export const ExerciseModal = ({ handler, workout }) => {
  const currentWorkout = workout;

  let timer;
  const [seconds, setSeconds] = useState(currentWorkout.exercises[0].duration);

  const startTimer = () => {
    timer =
      !timer &&
      setInterval(() => {
        setSeconds((prevSec) => prevSec - 1);
      }, 1000);
    if (seconds === 0) {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-center h-full">
      <button onClick={handler} className="absolute top-2 right-2">
        <Close />
      </button>
      <section className="flex w-full justify-between">
        <button>
          <ArrowLeft />
        </button>
        <div className="flex flex-col gap-y-6 relative pt-10">
          <CircularProgress
            size={234}
            strokeWidth={19}
            showProgress={seconds}
            className="text-medium"
            initialSeconds={currentWorkout.exercises[0].duration}
          />
          <H1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {seconds} sec
          </H1>
          <H2>{currentWorkout.exercises[0].exercise.name}</H2>
        </div>
        <button className="">
          <ArrowRight />
        </button>
      </section>
    </Dialog.Panel>
  );
};
