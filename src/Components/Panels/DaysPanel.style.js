import styled from 'styled-components';

const DaysPanelWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(auto, 1fr));
  justify-items: center;
  color: #bbb;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

export { DaysPanelWrapper };
