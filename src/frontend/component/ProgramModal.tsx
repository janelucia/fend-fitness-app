import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { ReactComponent as ArrowBack } from '../styles/images/arrowBack.svg';
import Button from './Button';
import H1 from './font/H1';
import ST from './font/SmallText';

const ProgramModal = ({ handler, isOpen, setIsOpen, title }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="absolute z-10 bg-dark left-0 top-0 h-full min-w-full p-2"
      >
        <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-between h-full">
          <Dialog.Title className="pt-2">{title}</Dialog.Title>
          <button onClick={handler} className="absolute top-2 right-2">
            <ArrowBack />
          </button>
          <div className="flex flex-col gap-y-6">
            <H1>Tag 1</H1>
            <ST>26 Min. · Kraft und Koordination</ST>
          </div>
          <Button className="mb-10">los!</Button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default ProgramModal;
