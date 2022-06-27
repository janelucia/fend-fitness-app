import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { ExercisePanel } from './ExercisePanel';
import { MainPanel } from './MainPanel';

enum ModalType {
  MainPanel,
  ExercisePanel,
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
}) => {
  const [modal, setModal] = useState(ModalType.MainPanel);
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const nextExercise = () => {
    setExerciseIndex(exerciseIndex + 1);
  };

  const prevExercise = () => {
    setExerciseIndex(exerciseIndex - 1);
  };

  let renderModal = (modalType: ModalType) => {
    switch (modalType) {
      case ModalType.ExercisePanel:
        return (
          <ExercisePanel
            key={exerciseIndex}
            handler={handler}
            exercise={workout.exercises[exerciseIndex]}
            prevExercise={prevExercise}
            nextExercise={nextExercise}
            showNextButton={workout.exercises[exerciseIndex + 1] !== undefined}
            showPrevButton={workout.exercises[exerciseIndex - 1] !== undefined}
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
