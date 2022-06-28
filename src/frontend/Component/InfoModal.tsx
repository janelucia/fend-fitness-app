import { useState } from 'react';
import Button from './Button';
import H1 from './font/H1';
import P from './font/P';

type InfoType = {
  exerciseTitle: string;
  exerciseDescription: string;
};

const InfoModal = ({ exerciseTitle, exerciseDescription }: InfoType) => {
  const [showModal, setShowModal] = useState(false);

  const InfoIcon = () => {
    return (
      <div className="absolute w-7 h-7 right-3 bottom-1">
        <svg className="circle" width="28" height="28">
          <circle
            cx="14"
            cy="14"
            r="13.5"
            stroke="#202430"
            strokeWidth="1"
            fill="#202430"
          ></circle>
        </svg>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <P className="absolute text-center top-1 right-3">i</P>
        </button>
      </div>
    );
  };

  const InfoSection = () => {
    return (
      <section
        className={`${
          !showModal ? 'hidden' : ''
        } bg-medium flex flex-col items-start justify-start text-left gap-y-20 p-2 transition`}
      >
        <div>
          <H1 className="pb-5">{exerciseTitle}</H1>
          <P>{exerciseDescription}</P>
        </div>
        <Button
          onClick={() => {
            setShowModal(false);
          }}
          className="mx-auto text-dark bg-gradient-to-br from-gradient1A to-gradient1B"
        >
          okay!
        </Button>
      </section>
    );
  };

  return (
    <section
      className={`${
        !showModal ? 'fixed h-10 bg-opacity-70' : 'absolute'
      } w-full rounded-tl-3xl rounded-tr-3xl flex justify-around gap-x-12 bottom-0 bg-medium px-5 py-2 text-opacity-100`}
    >
      {!showModal ? <InfoIcon /> : <InfoSection />}
    </section>
  );
};

export default InfoModal;
