import React from 'react';

type Props = {
  children: React.ReactNode;
};

const H1: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <h1 className="font-poppins font-bold text-4xl text-light">{children}</h1>
  );
};

export default H1;
