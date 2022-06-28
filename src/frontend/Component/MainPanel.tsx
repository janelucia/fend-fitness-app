import { Dialog } from '@headlessui/react';
import { ReactComponent as ArrowBack } from '../styles/images/svg/arrowBack.svg';
import Button from './Button';
import H1 from './font/H1';
import H3 from './font/H3';
import ST from './font/SmallText';

type MainType = {
  title: string;
  handler: any;
  week: any;
  subtitle: string;
  information: string;
  setExercisePanel: any;
};

export const MainPanel = ({
  title,
  handler,
  week,
  subtitle,
  information,
  setExercisePanel,
}: MainType) => (
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
      onClick={setExercisePanel}
      className="absolute bottom-10 text-dark px-3"
    >
      los!
    </Button>
  </Dialog.Panel>
);
