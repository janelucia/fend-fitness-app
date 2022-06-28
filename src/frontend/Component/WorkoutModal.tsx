import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { ExercisePanel } from './ExercisePanel';
import { MainPanel } from './MainPanel';
import { PausePanel } from './PausePanel';

type WorkoutType = {
  handler: any;
  isOpen: any;
  setIsOpen: any;
  title: string;
  week: any;
  subtitle: string;
  information: string;
  workout: any;
};

enum ModalType {
  MainPanel,
  ExercisePanel,
  PausePanel,
}

const WorkoutModal = ({
  handler,
  isOpen,
  setIsOpen,
  title,
  week,
  subtitle,
  information,
  workout,
}: WorkoutType) => {
  const [modal, setModal] = useState(ModalType.MainPanel);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  const nextExercise = () => {
    if ('up' === direction) {
      setExerciseIndex(exerciseIndex + 1);
    }
    setDirection('up');
    setModal(ModalType.ExercisePanel);
  };

  const prevExercise = () => {
    if ('down' === direction) {
      setExerciseIndex(exerciseIndex - 1);
    }
    setDirection('down');
    setModal(ModalType.ExercisePanel);
  };

  let renderModal = (modalType: ModalType) => {
    switch (modalType) {
      case ModalType.ExercisePanel:
        return (
          <ExercisePanel
            key={exerciseIndex}
            handler={handler}
            exercise={workout.exercises[exerciseIndex]}
            prevExercise={() => {
              setDirection('down');
              setModal(ModalType.PausePanel);
            }}
            nextExercise={() => {
              setDirection('up');
              setModal(ModalType.PausePanel);
            }}
            showNextButton={workout.exercises[exerciseIndex + 1] !== undefined}
            showPrevButton={workout.exercises[exerciseIndex - 1] !== undefined}
          />
        );
      case ModalType.PausePanel:
        return (
          <PausePanel
            handler={handler}
            prevExercise={prevExercise}
            nextExercise={nextExercise}
          />
        );
      case ModalType.MainPanel:
        return (
          <MainPanel
            handler={handler}
            title={title}
            week={week}
            subtitle={subtitle}
            information={information}
            setExercisePanel={() => setModal(ModalType.ExercisePanel)}
          />
        );
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="absolute z-10 bg-dark left-0 top-0 h-full min-w-full p-2"
      >
        {renderModal(modal)}
      </Dialog>
    </>
  );
};

export default WorkoutModal;
