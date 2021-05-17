import React from 'react';
import Date from '../Date';
import { DatesPanelWrapper } from './DatesPanel.style';
import PropTypes from 'prop-types';
import { useDate } from '../../Hooks/useDate';

const DatesPanel = ({
  currMonthDays,
  prevMonthDays,
  startDay,
  showPreviousMonthDates,
}) => {
  const { fetchCalendarMonthDates } = useDate();

  const { dates, activeDateArray } = fetchCalendarMonthDates({
    currMonthDays,
    prevMonthDays,
    startDay,
    showPreviousMonthDates,
  });

  return (
    <DatesPanelWrapper>
      {dates?.map((date, index) => (
        <Date index={index} date={date} active={activeDateArray[index]} />
      ))}
    </DatesPanelWrapper>
  );
};

DatesPanel.propTypes = {
  days: PropTypes.number,
  startDay: PropTypes.number,
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
};

DatesPanel.defaultProps = {
  days: 0,
};

export { DatesPanel };
