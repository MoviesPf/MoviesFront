import styled, { css } from "styled-components";

export const Reviews = styled.div`
  margin: 10px;
  width: 100%;
  background: #1c1c1c91;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid #1c1c1c91;
  box-shadow: 0 0 20px #1c1c1c91;
  ${(props) =>
    props.isDonator &&
    css`
      border: 1px solid rgb(25, 213, 118);
      box-shadow: 0 0 10px rgb(25, 213, 118);
    `}
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

export const ReviewBy = styled.span`
  padding-left: 10px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #fce8e6;
`;

export const SpanSpoiler = styled.span`
  font-size: 18px;
  color: rgb(25, 213, 118);
  font-weight: bold;
`;

export const SpanComments = styled.span`
  color: white;
  padding: 10px 5px;
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

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const DonatorImg = styled.img`
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
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