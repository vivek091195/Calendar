import { NUMBER_OF_DAYS_IN_WEEK } from '../constants';

const useDate = () => {
  const fetchCalendarMonthDates = ({
    currMonthDays,
    prevMonthDays,
    startDay,
    showPreviousMonthDates,
  }) => {
    const totalDays = currMonthDays + startDay + 1;
    let dates = Array(totalDays).fill(null);
    let activeDateArray = Array(totalDays).fill(true);

    if (!showPreviousMonthDates) {
      dates = dates.map((_, i) => {
        const date = i - startDay;
        return date > 0 ? date : null;
      });

      // If null entries are 7, then filter them
      const nullEntries = dates.length - dates.filter(Number).length;
      if (nullEntries === NUMBER_OF_DAYS_IN_WEEK) {
        dates = [...dates].filter(Number);
      }
    } else {
      dates = dates.map((_, i) => {
        const date = i - startDay;
        if (date <= 0) {
          activeDateArray[i] = false;
          return prevMonthDays + date;
        }
        return date;
      });

      // If inactive entries are 7, then filter them
      const inactiveDates =
        activeDateArray.length -
        activeDateArray.filter((el) => el && true).length;

      if (inactiveDates === NUMBER_OF_DAYS_IN_WEEK) {
        dates = [...dates].slice(NUMBER_OF_DAYS_IN_WEEK);
        activeDateArray = [...activeDateArray].filter((el) => el && true);
      }
      console.log(activeDateArray);
    }

    return { dates, activeDateArray };
  };

  return { fetchCalendarMonthDates };
};

export { useDate };
