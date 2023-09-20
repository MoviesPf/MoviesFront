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

  &::-webkit-scrollbar-thumb {
    background: green;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

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

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const ContainerModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButtonContainerDonate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ContainerModalInfo = styled.div`
  text-aling: center;
  margin-left: 50px;
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Submit = styled.label`
  border-radius: 200px;
  background: transparent;
  color: rgb(25, 213, 118);
  background: #6161611c;
  font-size: 25px;
  font-weight: bold;
  transition: 0.2s;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    color: #1b1b1b;
    background: rgb(25, 213, 118);
  }
`;

export const CancelButton = styled.label`
  border-radius: 200px;
  color: #fce8e6;
  background: #616161d1;
  font-size: 25px;
  font-weight: bold;
  transition: 0.2s;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    color: #1b1b1b;
    background: rgb(25, 213, 118);
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1c1c1c;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 108px 23px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.label`
  background: transparent;
  border: 2px solid #fce8e6;
  border-radius: 200px;
  cursor: pointer;
  font-size: 20px;
  color: #fce8e6;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 1;
  &:hover {
    color: rgb(25, 213, 118);
    border-color: rgb(25, 213, 118);
  }
`;

export const DonationContainer = styled.div`
  margin-top: 100px;
`;

export const RightContainer = styled.div`
  top: 0;
  right: 0;
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
