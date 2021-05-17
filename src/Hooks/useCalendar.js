import { useEffect, useState } from 'react';
import constate from 'constate';
import { DAYS_LEAP_YEAR_ENUM, DAYS_NON_LEAP_YEAR_ENUM } from '../constants';

const checkIfLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const fetchMonthStartingDay = (currentDate) => {
  return new Date(currentDate.getYear(), currentDate.getMonth(), 1).getDay();
};

const fetchNoOfDays = (month, isLeapYear = false) => {
  return isLeapYear
    ? DAYS_LEAP_YEAR_ENUM[month]
    : DAYS_NON_LEAP_YEAR_ENUM[month];
};

const useCalendar = () => {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate.getDate());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [isLeapYear, setIsLeapYear] = useState(false);
  const [startDay, setStartDay] = useState('');
  const [prevMonthDays, setPrevMonthDays] = useState(0);

  const fetchPreviousMonthDays = (currentMonth) => {
    return currentMonth
      ? fetchNoOfDays(currentMonth - 1, isLeapYear)
      : fetchNoOfDays(11, checkIfLeapYear(year - 1));
  };

  const setDateDetails = (date) => {
    setDate(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setPrevMonthDays(fetchPreviousMonthDays(date.getMonth()));
    setIsLeapYear(checkIfLeapYear(year));
    setStartDay(fetchMonthStartingDay(date));
  };

  useEffect(() => {
    const dateObj = new Date(year, month);
    setDateDetails(dateObj);
  }, [month]);

  const prevClickHandler = () => {
    setMonth((prevMonth) => {
      const currentMonth = prevMonth - 1;
      if (currentMonth === -1) {
        setYear(year - 1);
        return 11;
      }
      return currentMonth;
    });
  };

  const nextClickHandler = () => {
    setMonth((prevMonth) => {
      const currentMonth = prevMonth + 1;
      if (currentMonth === 12) {
        setYear(year + 1);
        return 0;
      }
      return currentMonth;
    });
  };

  return {
    date,
    month,
    year,
    isLeapYear,
    startDay,
    prevMonthDays,
    setStartDay,
    prevClickHandler,
    nextClickHandler,
  };
};

const [CalendarProvider, useCalendarContext] = constate(useCalendar);

export { CalendarProvider, useCalendarContext };
