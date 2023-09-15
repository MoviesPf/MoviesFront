import { ContainerModalReview, ModalReview, CloseButtonContainer, CloseButton, Comments, Submit, IconImg, ContainerModalImg, ModalImg, StarsContainer, TitleModal, YearTitleModal, TitleModalContainer } from "./ReviewModal.styled";
import fullStar from "../../../assets/Icons/icons8-star-100 green.png";
import emptyStar from "../../../assets/Icons/icons8-star-52.png";
import { useState } from "react";

export const ReviewModal = ({ year, handleCreate, setShowModal, programDetail, review, setReview}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleComment = (comments) => {
    setReview({ ...review, comments: comments });
  };

  const handleHoverRating = (rating) => {
    setHoverRating(rating);
  };

  const handleRating = (rating) => {
    setReview({ ...review, rating: rating });
  };

  return (
    <ContainerModalReview>
      <ModalReview>
        <ContainerModalImg>
          <ModalImg src={programDetail.poster} alt="" />
          <TitleModalContainer>
            <TitleModal> {`${programDetail.title}`} </TitleModal>
            <YearTitleModal>{`(${year})`}</YearTitleModal>
          </TitleModalContainer>
          <CloseButtonContainer>
            <CloseButton onClick={() => {setShowModal(false); setReview({ ...review, rating: 0 });}}>{" "}x{" "}</CloseButton>
          </CloseButtonContainer>
        </ContainerModalImg>
        <Comments placeholder="Add a review..." onChange={(e) => handleComment(e.target.value)}/>
        <StarsContainer>
          <div>
            {new Array(5).fill("").map((_, index) => (
              <IconImg key={index} onMouseEnter={() => handleHoverRating(index + 1)} onMouseLeave={() => handleHoverRating(0)}
                onClick={() => handleRating(index + 1)} src={ index < (hoverRating || review.rating) ? fullStar : emptyStar}/>
            ))}
          </div>
          <Submit onClick={handleCreate}>Save</Submit>
        </StarsContainer>
      </ModalReview>
    </ContainerModalReview>
  );
};
