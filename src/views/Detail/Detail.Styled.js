import styled from "styled-components";

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

export const ContainerModalInfo = styled.div`
  text-aling: center;
`;

export const TextDonation = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #fce8e6;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CloseButtonContainerDonate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
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

export const Comments = styled.textarea`
  width: 100%;
  padding: 15px 0;
  margin: 15px 0;
  border-radius: 5px;
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

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SimilarMoviesList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const SimilarTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #fce8e6;
  margin-top: 50px;
`;

export const MovieCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    max-width: 170px;
    object-fit: cover;
  }

  img:hover {
    transform: scale(1.05);
  }

  span {
    margin-top: 10px;
    visibility: hidden;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    border-radius: 15px;
    transition: visibility 0s, opacity 0.3s ease-in-out;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const ContainerMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  padding: 30px;
`;

export const ContainerReviews = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Reviews = styled.div`
  width: 100%;
  background: #1c1c1c91;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
`;

export const SpanComments = styled.span`
  color: white;
  padding: 10px 5px;
`;

export const ReviewBy = styled.span`
  padding-left: 10px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #fce8e6;
`;

export const StarsReviews = styled.img`
  width: 20px;
  height: 20px;
`;

export const IconImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
`;

export const ContainerModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalImg = styled.img`
  height: 120px;
  border-radius: 5px;
`;

export const TitleModalContainer = styled.div`
  text-align: center;
`;

export const TitleModal = styled.span`
  padding-left: 15px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #fce8e6;
`;

export const YearTitleModal = styled.span`
  font-size: 100%;
  color: rgba(252, 232, 230, 0.6);
  margin-left: 5px;
`;

export const SpanError = styled.span`
  background: rgb(0 0 0 / 21%);
  font-weight: bold;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px 0;
  font-size: 18px;
  color: rgb(25, 213, 118);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid rgb(25 213 118 / 23%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

export const ContainerAvatarImg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const AvatarImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const AreaC = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-top: 200px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;

export const ProgramCard = styled.img`
  width: 340px;
  height: 480px;
  border-radius: 30px;
  z-index: 2;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const CustomSwitch = styled.div`
  width: 36px;
  height: 18px;
  background-color: ${({ checked }) =>
    checked ? "rgb(25, 213, 118)" : "#ccc"};
  border-radius: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(25, 213, 118);
  }

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    transition: transform 0.3s ease;
    transform: ${({ checked }) =>
      checked ? "translateX(20px)" : "translateX(0)"};
  }
`;

export const CustomKnob = styled.div`
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.3s ease;
  transform: ${({ checked }) =>
    checked ? "translateX(20px)" : "translateX(0)"};
`;

export const CustomCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border-color: rgb(25, 213, 118);
  }

  ${HiddenCheckbox}:checked + & {
    background-color: rgb(25, 213, 118);
    border-color: rgb(25, 213, 118);
  }

  &::after {
    content: "\u2713";
    font-size: 14px;
    color: white;
    display: block;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.2s, transform 0.2s;
  }

  ${HiddenCheckbox}:checked + &::after {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CheckboxLabel = styled.span`
  font-size: 16px;
  color: #fce8e6;
  font-weight: bold;
`;

export const DonationContainer = styled.div`
  margin-top: 100px;
`;

export const SpanSpoiler = styled.span`
  font-size: 18px;
  color: rgb(25, 213, 118);
  font-weight: bold;
`;

export const ButtonFullComments = styled.label`
  border-radius: 5px;
  background: transparent;
  color: rgb(25, 213, 118);
  background: #6161611c;
  font-size: 13px;
  font-weight: bold;
  transition: 0.2s;
  padding: 2px 5px;
  cursor: pointer;
  &:hover {
    color: #1b1b1b;
    background: rgb(25, 213, 118);
  }
`;
