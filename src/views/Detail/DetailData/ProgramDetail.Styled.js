import styled from "styled-components";

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SimilarTitle = styled.span`
font-size: 24px;
font-weight: bold;
margin-bottom: 10px;
text-align: center;
color: #fce8e6;
margin-top: 50px;
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

export const EmptyMessage = styled.div`
padding: 20px;
margin-top: 10px;
width: 100%;
background: #1c1c1c91;
display: flex;
justify-content: center;
border-radius: 15px;
color: white;
`