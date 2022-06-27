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

  let renderModal = (modalType: ModalType) => {
    switch (modalType) {
      case ModalType.ExercisePanel:
        return workout.exercises.map((exercise) => {
          return (
            <ExercisePanel
              key={exercise.id}
              handler={handler}
              exercise={exercise}
            />
          );
        });
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
