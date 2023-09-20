import { ContainerModalReview, ModalReview, CloseButtonContainer, CloseButton, Comments, Submit, IconImg, ContainerModalImg, ModalImg, StarsContainer, TitleModal, 
YearTitleModal, TitleModalContainer,CheckboxLabel, CustomKnob, CustomSwitch, HiddenCheckbox, CheckboxContainer, SpanError
} from "./ReviewModal.styled";
import fullStar from "../../../assets/Icons/icons8-star-100 green.png";
import emptyStar from "../../../assets/Icons/icons8-star-52.png";
import { useState } from "react";

export const ReviewModal = ({ year, showError, handleCloseModal, handleCreate, programDetail, review, setReview}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [commentError, setCommentError] = useState(false);

  const handleComment = (comments) => {
    if (comments.length < 10 || comments.length > 3500) {
      setCommentError(true);
    } else {
      setCommentError(false);
    }
    setReview({ ...review, comments: comments });
  };

  const handleHoverRating = (rating) => {
    setHoverRating(rating);
  };

  const handleRating = (rating) => {
    setReview({ ...review, rating: rating });
  };

  const handleCheckboxChange = (event) => {
    setReview({ ...review, spoiler: event.target.checked }); 
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
            <CloseButton onClick={() => handleCloseModal()}> x </CloseButton>
          </CloseButtonContainer>
        </ContainerModalImg>
        <Comments placeholder="Add a review..." onChange={(e) => handleComment(e.target.value)}/>
        {commentError && (
              <SpanError>
                Comments must be between 10 and 3500 characters.
              </SpanError>
            )}
            <CheckboxContainer>
              <HiddenCheckbox
                type="checkbox"
                checked={review.spoiler}
                onChange={handleCheckboxChange}
              />
              <CustomSwitch checked={review.spoiler}>
                <CustomKnob checked={review.spoiler} />
              </CustomSwitch>
              <CheckboxLabel>Contains Spoiler</CheckboxLabel>
            </CheckboxContainer>
            {showError && 
              <SpanError>
                Please select a rating before submitting your review.
              </SpanError>
            }
        <StarsContainer>
          <div>
            {new Array(5).fill("").map((_, index) => (
              <IconImg key={index} onMouseEnter={() => handleHoverRating(index + 1)} onMouseLeave={() => handleHoverRating(0)} onClick={() => handleRating(index + 1)} src={  index < (hoverRating || review.rating) ? fullStar : emptyStar}/>
            ))}
          </div>
          <Submit onClick={handleCreate}>Save</Submit>
        </StarsContainer>
      </ModalReview>
    </ContainerModalReview>
  );
};
