import styled, { css } from "styled-components";

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 45vh;

  background-image: ${({ backgroundurl }) => backgroundurl};
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  opacity: 0.5;
  z-index: 1;
`;
