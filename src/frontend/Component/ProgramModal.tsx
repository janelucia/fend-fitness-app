import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { ReactComponent as ArrowBack } from '../styles/images/arrowBack.svg';
import { ReactComponent as Close } from '../styles/images/x.svg';
import Button from './Button';
import H1 from './font/H1';
import H3 from './font/H3';
import ST from './font/SmallText';

const ProgramModal = ({
  handler,
  isOpen,
  setIsOpen,
  title,
  week,
  subtitle,
  information,
  workout,
}) => {
  const [currentModal, openNextModal] = useState(false);
  const toggleNextModal = () => {
    openNextModal(!currentModal);
  };
  const currentWorkout = workout;

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="absolute z-10 bg-dark left-0 top-0 h-full min-w-full p-2"
      >
        {currentModal === true ? (
          <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-between h-full">
            <Dialog.Title className="pt-2">{title}</Dialog.Title>
            <button onClick={handler} className="absolute top-2 right-2">
              <Close />
            </button>
            <div className="flex flex-col gap-y-6">
              <H3>{currentWorkout.exercises[0].exercise.name}</H3>
            </div>
          </Dialog.Panel>
        ) : (
          <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-between h-full">
            <Dialog.Title className="pt-2">{title}</Dialog.Title>
            <button onClick={handler} className="absolute top-2 right-2">
              <ArrowBack />
            </button>
            <div className="flex flex-col gap-y-6">
              <H3>{week}</H3>
              <H1>{subtitle}</H1>
              <ST>{information}</ST>
            </div>
            <Button onClick={toggleNextModal} className="mb-10 text-dark px-3">
              los!
            </Button>
          </Dialog.Panel>
        )}
      </Dialog>
    </>
  );
};

export default ProgramModal;
