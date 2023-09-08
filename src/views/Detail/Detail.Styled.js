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
  background-color: grey;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 500px;
  border-radius: 10px;
`;

export const CloseButton = styled.label`
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
`;

export const Comments = styled.textarea`
  width: 100%;
`;

export const Submit = styled.label`
  width: 100%;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SimilarMoviesList = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 100px;
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
`;

export const ContainerReviews = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 190px;
`;

export const Reviews = styled.div`
  width: 100%;
  background: grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
