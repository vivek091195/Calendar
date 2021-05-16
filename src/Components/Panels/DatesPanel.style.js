import styled from 'styled-components';

const DatesPanelWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(auto, 1fr));
  justify-items: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  font-size: 1.2rem;
`;

export { DatesPanelWrapper };
