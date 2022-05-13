import classNames from 'classnames';
import { useState } from 'react';
import Program from './Program';

const Card = (props) => {
  const { className, children } = props;
  const programModal = () => {
    return <Program></Program>;
  };
  return (
    <div
      onClick={programModal}
      className={classNames(
        'bg-medium text-light rounded-[30px] w-full',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
