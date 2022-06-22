import React from 'react';
import classNames from 'classnames';

type PProps = {
  className?: string;
  children: React.ReactNode;
};

const P = ({ children, className }: PProps) => {
  return (
    <p
      className={classNames(
        'font-poppins font-normal text-base text-light',
        className
      )}
    >
      {children}
    </p>
  );
};

export default P;
