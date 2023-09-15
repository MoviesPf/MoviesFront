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

export const ModalReview = styled.div`
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

export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CloseButton = styled.label`
  width: 40px;
  height: 30px;
  border: 2px solid #fce8e6;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: #fce8e6;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  &:hover {
    color: rgb(25, 213, 118);
    border-color: rgb(25, 213, 118);
  }
`

export const Comments = styled.textarea`
  width: 100%;
  padding: 15px 0;
  margin: 15px 0;
  border-radius: 5px;
`

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
`

export const IconImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
`

export const ContainerModalImg = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ModalImg = styled.img`
  height: 120px;
  border-radius: 5px;
`

export const TitleModalContainer = styled.div`
  text-align: center;
`

export const TitleModal = styled.span`
  padding-left: 15px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #fce8e6;
`

export const YearTitleModal = styled.span`
  font-size: 100%;
  color: rgba(252, 232, 230, 0.6);
  margin-left: 5px;
`

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`