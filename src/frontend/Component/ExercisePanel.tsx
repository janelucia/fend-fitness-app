import { Dialog, Popover } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { ReactComponent as Close } from '../styles/images/svg/x.svg';
import { ReactComponent as ArrowLeft } from '../styles/images/svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../styles/images/svg/arrowRight.svg';
import { CircularProgress } from './CircularProgress';
import H1 from './font/H1';
import H2 from './font/H2';
import Button from './Button';

type ExerciseType = {
  handler: any;
  exercise: any;
  prevExercise: any;
  nextExercise: any;
  showPrevButton: boolean;
  showNextButton: boolean;
};

export const ExercisePanel = ({
  handler,
  exercise,
  prevExercise,
  nextExercise,
  showPrevButton,
  showNextButton,
}: ExerciseType) => {
  const currentExercise = exercise;

  let timer;
  const [seconds, setSeconds] = useState(currentExercise.duration);

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

  const trackExercise = () =>
    currentExercise.duration ? (
      <>
        <CircularProgress
          size={234}
          strokeWidth={19}
          showProgress={seconds}
          initialSeconds={currentExercise.duration}
          strokeColor="#3A4151"
        />
        <H1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {seconds} sec
        </H1>
        <H2>{currentExercise.exercise.name}</H2>
      </>
    ) : (
      <>
        <H1 className="pt-4">{currentExercise.reps} x</H1>
        <H2>{currentExercise.exercise.name}</H2>
      </>
    );

  return (
    <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-center h-full">
      <button onClick={handler} className="absolute top-2 right-2">
        <Close />
      </button>
      <section className="flex w-full justify-between">
        <button
          onClick={prevExercise}
          disabled={!showPrevButton}
          className={!showPrevButton ? 'text-medium' : ''}
        >
          <ArrowLeft />
        </button>
        <div className="flex flex-col gap-y-6 relative pt-10 items-center">
          {trackExercise()}
          {!showNextButton ? (
            <Button className="text-dark">geschafft</Button>
          ) : (
            <></>
          )}
        </div>
        <button
          onClick={nextExercise}
          disabled={!showNextButton}
          className={!showNextButton ? 'text-medium' : ''}
        >
          <ArrowRight />
        </button>
      </section>
      <Popover className="relative">
        <Popover.Button className="absolute">i</Popover.Button>
        <Popover.Panel></Popover.Panel>
      </Popover>
    </Dialog.Panel>
  );
};
