import styled from "styled-components";

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

export const AvatarImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;

export const ContainerAvatarImg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const ProgramCard = styled.img`
  width: 340px;
  height: 480px;
  border-radius: 30px;
  z-index: 2;
`;

export const ReviewBy = styled.span`
  padding-left: 10px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #fce8e6;
`;

export const Reviews = styled.div`
  width: 100%;
  background: #1c1c1c91;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
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


export const SpanComments = styled.span`
  color: white;
  padding: 10px 5px;
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const StarsReviews = styled.img`
  width: 20px;
  height: 20px;
`;

export const YearTitleModal = styled.span`
  font-size: 100%;
  color: rgba(252, 232, 230, 0.6);
  margin-left: 5px;
`;