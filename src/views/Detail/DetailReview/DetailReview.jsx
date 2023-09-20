import {SpanComments, StarsReviews, ReviewBy, YearTitleModal, Reviews, StarsContainer, AvatarImg, ContainerAvatarImg, ButtonFullComments, SpanSpoiler, DonatorImg} from "./DetailReview.Styled";
import { useState } from "react";
import emptyStar from "../../../assets/Icons/icons8-star-52.png"
import fullStar from "../../../assets/Icons/icons8-star-100 green.png"
import pepino from "../../../assets/UserIcons/NoEsUnPepino.png"

export const DetailReview = ({r}) => {
    
    const [showFullComments, setShowFullComments] = useState(false);

    return (
        <Reviews key={r.id} isDonator={ r.User.donator}>
            <ContainerAvatarImg>
                <div>
                    <AvatarImg src={r.User.avatar} alt="" />
                    <ReviewBy>
                        <span>{`Reveiwed by `}</span>
                        {r.User.nickname}
                        {r.User.donator && (
                            <DonatorImg style={{}} src={pepino} alt="Donator Icon" />
                        )}    
                    </ReviewBy>
                </div>
                {r.spoiler && <SpanSpoiler>Spoiler Alert!!</SpanSpoiler>}
            </ContainerAvatarImg>
            <SpanComments>
                {showFullComments ? r.comments : r.comments?.slice(0, 500)}
                {r.comments?.length > 500 && (
                    <ButtonFullComments onClick={() => setShowFullComments(!showFullComments)}>
                        {showFullComments ? "Read less" : "Read more"}
                    </ButtonFullComments>
                )}
            </SpanComments>
            <StarsContainer>
                <span>
                    {new Array(5).fill('').map((_, index) => (
                    <StarsReviews key={`key-${index}`} onClick={() => handleRating(index + 1)}
                    src={r.rating > index ? fullStar : emptyStar}alt={r.rating > index ? '★' : '☆'}/>
                    ))}
                </span>
                <YearTitleModal>{`(${r.date})`}</YearTitleModal>
            </StarsContainer>
        </Reviews>
    );
};