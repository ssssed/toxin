import { FC } from 'react';
import type { ContainerType } from './types';

const Container: FC<ContainerType> = ({
  children,
  maxWidth,
  direction = 'row',
  gap,
  center = false,
  padding = '0',
  items = 'normal',
  content = 'normal',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: items,
        maxWidth,
        width: '100%',
        gap,
        flexDirection: direction,
        justifyContent: content,
        padding,
        margin: center ? '0 auto' : 0,
      }}
    >
      {children}
    </div>
  );
};

export { Container };
