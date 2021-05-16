import React from 'react';
import Date from '../Date';
import { DatesPanelWrapper } from './DatesPanel.style';

const DatesPanel = ({ days }) => {
  const dates = Array.from({ length: days }, (_, index) => index + 1);
  return (
    <DatesPanelWrapper>
      {dates.map((date, index) => (
        <Date index={index} date={date} />
      ))}
    </DatesPanelWrapper>
  );
};

export { DatesPanel };
