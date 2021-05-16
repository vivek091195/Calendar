import styled from 'styled-components';

const NavigationPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.5rem;
`;
const Marker = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  box-shadow: 0 1px 4px #bbb;
  border-radius: 10px;
  cursor: pointer;
`;
const MonthWrapper = styled.div``;

export { NavigationPanelWrapper, Marker, MonthWrapper };
