import React from 'react';
import classNames from 'classnames';

type CircularProps = {
  size: number;
  strokeWidth: number;
  showProgress?: number;
  initialSeconds?: number;
  className?: string;
};

export const CircularProgress = ({
  size,
  strokeWidth,
  showProgress,
  initialSeconds,
  className,
}: CircularProps) => {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumfence = radius * Math.PI * 2;
  const dash = (showProgress * circumfence) / initialSeconds;

  return (
    <svg
      className="progressCircle"
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <defs>
        <linearGradient id="ProgressGradient">
          <stop stopColor="#3EE4E8" offset="0%" />
          <stop stopColor="#3B85E6" offset="50%" />
          <stop stopColor="#3A4AE4" offset="100%" />
        </linearGradient>
      </defs>
      <circle
        className={classNames(className)}
        fill="none"
        stroke="#3A4151"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      ></circle>
      <circle
        fill="none"
        stroke="url(#ProgressGradient)"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumfence - dash]}
        strokeLinecap="round"
      ></circle>
    </svg>
  );
};
