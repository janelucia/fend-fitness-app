import classNames from 'classnames';
import React from 'react';

type Button = {
  children?: React.ReactNode;
  onClick?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  className?: string;
};

const Button = ({ children, onClick, className }: Button) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'flex justify-center w-fit px-4 py-2 rounded-[50px]',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
