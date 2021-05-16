import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  NavigationPanelWrapper,
  Marker,
  MonthWrapper,
} from './NavigationPanel.style';

const NavigationPanel = ({
  currentMonth,
  currentYear,
  prevClickHandler,
  nextClickHandler,
}) => {
  return (
    <NavigationPanelWrapper>
      <Marker onClick={prevClickHandler}>
        <ChevronLeftIcon />
      </Marker>
      <MonthWrapper>{`${currentMonth} ${currentYear}`}</MonthWrapper>
      <Marker onClick={nextClickHandler}>
        <ChevronRightIcon />
      </Marker>
    </NavigationPanelWrapper>
  );
};

export { NavigationPanel };
