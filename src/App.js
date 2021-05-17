import React from 'react';
import Calendar from './Components/Calendar';
import { CalendarProvider } from './Hooks/useCalendar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <CalendarProvider>
        <Calendar showPreviousMonthDates={false} />
      </CalendarProvider>
    </div>
  );
};

export default App;
