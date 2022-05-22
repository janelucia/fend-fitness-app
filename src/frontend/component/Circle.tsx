import React from 'react';
import classNames from 'classnames';

type CircleProps = {
  className?: string;
  children?: React.ReactNode;
};

const Circle = ({ className, children }: CircleProps) => {
  return (
    <div className={classNames('rounded-full', className)}>{children}</div>
  );
};

export default Circle;
