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

export const ModalReview = styled.div`
  z-index: 2;
  position: fixed;
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
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fce8e6;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: rgb(25, 213, 118);
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

export const MovieCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /*  opacity: 0.9 !important;
  border-radius: 10px !important; */

  img {
    border-radius: 10px;
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
    opacity: 0;
    height: 0;
    transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
  }

  &:hover span {
    opacity: 1;
    height: auto;
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
  background: grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
`;

export const IconImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ContainerModalImg = styled.div`
  display: flex;
`;

export const ModalImg = styled.img`
  height: 120px;
  border-radius: 5px;
`;

export const SpanModalImg = styled.span`
  padding-left: 15px;
  font-size: 22px;
  font-weight: 900;
`;

export const SpanError = styled.span`
  color: #1c1c1c;
  background: #fce8e6;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 30px;
  padding: 5px 10px;
  margin: 10px 0;
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
