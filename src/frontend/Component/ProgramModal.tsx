import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { ReactComponent as ArrowBack } from '../styles/images/svg/arrowBack.svg';
import Button from './Button';
import H1 from './font/H1';
import H3 from './font/H3';
import ST from './font/SmallText';
import { ExerciseModal } from './ExerciseModal';

const MainModal = ({
  title,
  handler,
  week,
  subtitle,
  information,
  toggleNextModal,
}) => (
  <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-center h-full">
    <Dialog.Title className="absolute top-1 mx-auto">{title}</Dialog.Title>
    <button onClick={handler} className="absolute top-3 right-3">
      <ArrowBack />
    </button>
    <div className="flex flex-col gap-y-6">
      <H3>{week}</H3>
      <H1>{subtitle}</H1>
      <ST>{information}</ST>
    </div>
    <Button
      onClick={toggleNextModal}
      className="absolute bottom-10 text-dark px-3"
    >
      los!
    </Button>
  </Dialog.Panel>
);

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

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="absolute z-10 bg-dark left-0 top-0 h-full min-w-full p-2"
      >
        {currentModal === true ? (
          <ExerciseModal handler={handler} workout={workout} />
        ) : (
          <MainModal
            handler={handler}
            title={title}
            week={week}
            subtitle={subtitle}
            information={information}
            toggleNextModal={toggleNextModal}
          />
        )}
      </Dialog>
    </>
  );
};

export default ProgramModal;
