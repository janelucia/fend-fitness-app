import React from 'react';
import { Dialog } from '@headlessui/react';
import { ReactComponent as Close } from '../styles/images/svg/x.svg';
import InfoModal from './InfoModal';

type PanelWrapperType = {
  handler: any;
  children: any;
  showInfo: boolean;
  exerciseTitle?: string;
  exerciseDescription?: string;
};

const PanelWrapper = ({
  handler,
  showInfo,
  exerciseTitle,
  exerciseDescription,
  children,
}: PanelWrapperType) => {
  return (
    <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-center h-full">
      <button onClick={handler} className="absolute top-2 right-2">
        <Close />
      </button>
      <section className="flex w-full justify-between">{children}</section>
      {showInfo === true ? (
        <InfoModal
          exerciseTitle={exerciseTitle}
          exerciseDescription={exerciseDescription}
        />
      ) : (
        <></>
      )}
    </Dialog.Panel>
  );
};

export default PanelWrapper;
