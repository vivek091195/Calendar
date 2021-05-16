import React from 'react';
import Day from '../Day';
import { DaysPanelWrapper } from './DaysPanel.style';
import { DAYS } from '../../constants';

const DaysPanel = () => {
  return (
    <DaysPanelWrapper>
      {DAYS.map((day, index) => (
        <Day key={index} day={day.substring(0, 2)} />
      ))}
    </DaysPanelWrapper>
  );
};

export { DaysPanel };
