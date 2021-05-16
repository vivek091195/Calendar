import { useEffect, useState } from 'react';
import constate from 'constate';

const checkIfLeapYear = (year) =>
  year % 4 === 0 && year % 400 === 0 && year % 100 !== 0;

const useCalendar = () => {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isLeapYear, setIsLeapYear] = useState(false);
  const fetchCurrentDateDetails = () => {
    const currentDate = new Date();
    setDate(currentDate.getDate());
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
    setIsLeapYear(checkIfLeapYear(year));
  };

  useEffect(() => {
    fetchCurrentDateDetails();
  }, []);

  return {
    date,
    month,
    year,
  };
};

const [CalendarProvider, useCalendarContext] = constate(useCalendar);

export { CalendarProvider, useCalendarContext };
