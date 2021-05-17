import React from 'react';
import { NavigationPanel } from './Panels/NavigationPanel';
import { DaysPanel } from './Panels/DaysPanel';
import { DatesPanel } from './Panels/DatesPanel';
import { CalendarWrapper } from './Calendar.style';
import { useCalendarContext } from '../Hooks/useCalendar';
import {
  DAYS_LEAP_YEAR_ENUM,
  DAYS_NON_LEAP_YEAR_ENUM,
  MONTHS,
} from './../constants';
import PropTypes from 'prop-types';

const Calendar = ({ showPreviousMonthDates }) => {
  const {
    date,
    month,
    year,
    isLeapYear,
    startDay,
    prevMonthDays,
    prevClickHandler,
    nextClickHandler,
  } = useCalendarContext();

  const daysArray = isLeapYear ? DAYS_LEAP_YEAR_ENUM : DAYS_NON_LEAP_YEAR_ENUM;
  return (
    <CalendarWrapper>
      <NavigationPanel
        currentMonth={MONTHS[month]}
        currentYear={year}
        prevClickHandler={prevClickHandler}
        nextClickHandler={nextClickHandler}
      />

      <DaysPanel />

      <DatesPanel
        currMonthDays={daysArray[month]}
        prevMonthDays={prevMonthDays}
        startDay={startDay}
        showPreviousMonthDates={showPreviousMonthDates}
      />
    </CalendarWrapper>
  );
};

Calendar.propTypes = {
  showPreviousMonthDates: PropTypes.bool,
};

Calendar.defaultProps = {
  showPreviousMonthDates: false,
};

export default Calendar;
