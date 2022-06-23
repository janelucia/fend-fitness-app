import * as React from 'react';
import classNames from 'classnames';

type H2Props = {
  className?: string;
  children: React.ReactNode;
};

const H2 = ({ className, children }: H2Props) => {
  return (
    <h2
      className={classNames(
        'font-poppins font-bold text-2xl text-light',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
