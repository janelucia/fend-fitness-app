import { useMutation, useQuery } from '@apollo/client';
import { Dialog } from '@headlessui/react';
import { ID } from 'graphql-modules/shared/types';
import { useState } from 'react';
import { PUBLISH_PROGRESS, UPSERT_PROGRESS } from '../Mutations/UpsertProgress';
import { PROGRESS_QUERY } from '../Queries/Progress';
import { ExercisePanel } from './ExercisePanel';
import { MainPanel } from './MainPanel';
import { PausePanel } from './PausePanel';

type WorkoutType = {
  handler: any;
  isOpen: any;
  setIsOpen: any;
  programId: ID;
  title: string;
  week: any;
  weekId: ID;
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
  programId,
  title,
  week,
  weekId,
  subtitle,
  information,
  workout,
}: WorkoutType) => {
  const [modal, setModal] = useState(ModalType.MainPanel);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [upsertProgress] = useMutation(UPSERT_PROGRESS);
  const [publishProgress] = useMutation(PUBLISH_PROGRESS);
  const { loading, error, data } = useQuery(PROGRESS_QUERY, {
    variables: { programid: programId },
  });

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
            setExercisePanel={() => {
              setModal(ModalType.ExercisePanel);
              upsertProgress({
                variables: {
                  progressid: data.progresses[0].id,
                  programid: programId,
                  weekid: weekId,
                  workoutid: workout.id,
                },
              })
                .then((res) => {
                  return publishProgress({
                    variables: {
                      progressid: res.data.upsertProgress.id,
                    },
                  });
                })
                .catch((error) =>
                  console.error('upsertProgress failed', error)
                );
            }}
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
