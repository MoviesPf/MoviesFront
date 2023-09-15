import styled from "styled-components";

export const ContainerModalReview = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`

export const ModalEdit = styled.div`
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
`