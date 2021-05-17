import styled, { css } from 'styled-components';

const disabled = () => {
  return css`
    opacity: 0.4;
    * {
      pointer-events: none;
      cursor: none;
    }
  `;
};

const active = () => {
  return css`
    cursor: pointer;
  `;
};

const DateWrapper = styled.div`
  ${(props) => (props.active ? active() : disabled())}
`;

export { DateWrapper };
