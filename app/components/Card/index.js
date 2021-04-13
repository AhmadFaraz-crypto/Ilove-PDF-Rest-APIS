import React from 'react';

// styles
import Card from './style';

const CardComponent = ({ bgColor, shadow, children }) => (
  <Card bgColor={bgColor} shadow={shadow}>
    {children}
  </Card>
);

export default CardComponent;
