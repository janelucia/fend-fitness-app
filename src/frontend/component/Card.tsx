import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const Card = (
  { className, children }: CardProps,
  ...enhancedProgramObject: { id: number; name: string; gradient: string }[]
) => {
  return (
    <div
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
