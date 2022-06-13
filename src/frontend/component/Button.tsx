import React from 'react';

type Button = {
  children?: React.ReactNode;
};

const Button = ({ children }: Button) => {
  return (
    <button className="flex justify-center w-fit px-3 py-1 rounded-[50px] bg-gradient-to-br from-gradient1A to-gradient1B">
      {children}
    </button>
  );
};

export default Button;
