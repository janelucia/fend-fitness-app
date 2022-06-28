import React from 'react';
import { Dialog } from '@headlessui/react';
import { ReactComponent as Close } from '../styles/images/svg/x.svg';

type PanelWrapperType = {
  handler: any;
  children: any;
};

const PanelWrapper = ({ handler, children }: PanelWrapperType) => {
  return (
    <Dialog.Panel className="text-light text-center relative flex flex-col items-center justify-center h-full">
      <button onClick={handler} className="absolute top-2 right-2">
        <Close />
      </button>
      <section className="flex w-full justify-between">{children}</section>
    </Dialog.Panel>
  );
};

export default PanelWrapper;
