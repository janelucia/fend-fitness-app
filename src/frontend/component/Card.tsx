import React from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import Program from './Program';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const programModal = () => {
  return <Program></Program>;
};

const Card = ({ className, children }: CardProps) => {
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
