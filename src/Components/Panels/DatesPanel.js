import React from 'react';
import Date from '../Date';
import { DatesPanelWrapper } from './DatesPanel.style';
import PropTypes from 'prop-types';
import { NUMBER_OF_DAYS_IN_WEEK } from '../../constants';

const DatesPanel = ({ days, startDay }) => {
  let dates = Array(days + startDay + 1)
    .fill(null)
    .map((_, i) => {
      const date = i - startDay;
      return date <= 0 ? null : date;
    });

  // If null entries are 7, then filter them
  const nullEntries = dates.length - dates.filter(Number).length;
  if (nullEntries === NUMBER_OF_DAYS_IN_WEEK) {
    dates = [...dates].filter(Number);
  }

  return (
    <DatesPanelWrapper>
      {dates.map((date, index) => (
        <Date index={index} date={date} />
      ))}
    </DatesPanelWrapper>
  );
};

DatesPanel.propTypes = {
  days: PropTypes.number,
  startDay: PropTypes.number,
};

DatesPanel.defaultProps = {
  days: 0,
};

export { DatesPanel };
