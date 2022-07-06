import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type CardProps = {
  className?: string;
  url?: string;
  children?: React.ReactNode;
};

const Card = ({ className, children, url }: CardProps) => {
  const backgroundImage = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
  };
  return (
    <div
      className={classNames(
        'bg-medium text-light rounded-[30px] w-full',
        className
      )}
      style={!url ? {} : backgroundImage}
    >
      {children}
    </div>
  );
};

export default Card;
