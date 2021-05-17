import React from 'react';
import { DateWrapper } from './Date.style';

const Date = ({ date, active }) => {
  return <DateWrapper active={active}>{date}</DateWrapper>;
};

export default Date;
