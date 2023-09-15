import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #000;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  z-index: -1;

  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-thumb{
    background: green;
  }
`

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

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