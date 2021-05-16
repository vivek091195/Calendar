import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  NavigationPanelWrapper,
  Marker,
  MonthWrapper,
} from './NavigationPanel.style';

const NavigationPanel = ({ currentMonth, currentYear }) => {
  return (
    <NavigationPanelWrapper>
      <Marker>
        <ChevronLeftIcon />
      </Marker>
      <MonthWrapper>{`${currentMonth} ${currentYear}`}</MonthWrapper>
      <Marker>
        <ChevronRightIcon />
      </Marker>
    </NavigationPanelWrapper>
  );
};

export { NavigationPanel };
