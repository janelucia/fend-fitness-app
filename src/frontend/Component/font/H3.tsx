import React from 'react';
import classNames from 'classnames';

type H3Props = {
  children: React.ReactNode;
  className?: string;
};

const H3 = ({ children, className }: H3Props) => {
  return (
    <h3
      className={classNames(
        'font-poppins font-bold text-lg text-light',
        className
      )}
    >
      {children}
    </h3>
  );
};

export default H3;
