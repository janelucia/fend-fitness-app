import React from 'react';

type H3Props = {
  children: React.ReactNode;
};

const H3 = ({ children }: H3Props) => {
  return (
    <h3 className="font-poppins font-bold text-lg text-light">{children}</h3>
  );
};

export default H3;
