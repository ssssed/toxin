import {FC} from 'react';

const Container: FC<Container> = ({
  children,
  maxWidth,
  direction = 'row',
  gap,
  center = false,
  padding = '0',
  items = 'normal',
}) => {
  return (
    <div
      style={{
          display: 'flex',
          alignItems: items,
          maxWidth,
          width: "100%",
          gap,
          flexDirection: direction,
          padding,
          margin: center ? '0 auto' : 0,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
