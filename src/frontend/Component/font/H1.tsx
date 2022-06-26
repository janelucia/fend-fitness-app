import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className: string;
};

const H1: React.FunctionComponent<Props> = ({ children, className }) => {
  return (
    <h1
      className={classNames(
        'font-poppins font-bold text-4xl text-light',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
