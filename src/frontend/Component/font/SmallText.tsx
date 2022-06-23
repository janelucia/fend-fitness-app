import React from 'react';
import classNames from 'classnames';

type STProps = {
  className?: string;
  children: React.ReactNode;
};

const ST = ({ className, children }: STProps) => {
  return (
    <p
      className={classNames(
        'font-poppins font-normal text-xs text-light',
        className
      )}
    >
      {children}
    </p>
  );
};

export default ST;
