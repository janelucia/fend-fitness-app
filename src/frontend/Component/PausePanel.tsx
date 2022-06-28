import { Dialog } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { ReactComponent as Close } from '../styles/images/svg/x.svg';
import { ReactComponent as ArrowLeft } from '../styles/images/svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../styles/images/svg/arrowRight.svg';
import { CircularProgress } from './CircularProgress';
import H1 from './font/H1';
import H2 from './font/H2';
import PanelWrapper from './PanelWrapper';
import Button from './Button';

type PauseType = {
  handler: any;
  prevExercise: any;
  nextExercise: any;
};

export const PausePanel = ({
  handler,
  prevExercise,
  nextExercise,
}: PauseType) => {
  let timer: any;
  const [seconds, setSeconds] = useState(15);

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
    <PanelWrapper handler={handler} showInfo={false}>
      <button onClick={prevExercise}>
        <ArrowLeft />
      </button>
      <div className="flex flex-col gap-y-6 relative pt-10 items-center">
        <CircularProgress
          size={234}
          strokeWidth={19}
          showProgress={seconds}
          initialSeconds={15}
          strokeColor="#3A4151"
        />
        <H1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {seconds} sec
        </H1>
        <H2>Pause</H2>
        <Button onClick={nextExercise} className="text-light bg-medium">
          überspringen
        </Button>
      </div>
      <button onClick={nextExercise}>
        <ArrowRight />
      </button>
    </PanelWrapper>
  );
};
