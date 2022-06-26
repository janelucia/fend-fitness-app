import { useRef } from 'react';
import { useElapsedTime } from 'use-elapsed-time';

const linearEase = (
  time: number,
  start: number,
  goal: number,
  duration: number
) => {
  if (duration === 0) {
    return start;
  }
  const currentTime = time / duration;
  return start + goal * time;
};
