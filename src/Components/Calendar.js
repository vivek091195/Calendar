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

const Calendar = () => {
  const {
    date,
    month,
    year,
    isLeapYear,
    startDay,
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

      <DatesPanel days={daysArray[month]} startDay={startDay} />
    </CalendarWrapper>
  );
};

export default Calendar;
