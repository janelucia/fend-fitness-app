import React from 'react';

type PProps = {
  children: React.ReactNode;
};

const P = ({ children }: PProps) => {
  return (
    <p className="font-poppins font-normal text-base text-light">{children}</p>
  );
};

export default P;
