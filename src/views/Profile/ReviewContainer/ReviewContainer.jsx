import { ButtonFullComments, CardContainer, MoviePoster, DetailContainer, ContextRow, Title, MovieData, StarsRow, OverviewText } from "./ReviewContainer.Styled"
import { Link } from 'react-router-dom';
import StarPoint from '../../../Components/StarPoint';
import defaultImg from "../../../assets/defaultMovie.png";
import { useState } from "react";

export const ReviewContainer = ({reviewDate, year, genreA, genreB, overview, progImge, starVal, title, programId}) => {
  const starsCount = [];
  const [showFullComments, setShowFullComments] = useState(true);
  
  for (let index = 0; index < starVal; index++) { starsCount.push(<StarPoint key={index}/>)};

  let image =  defaultImg;
  if (progImge){image = progImge};

  return (
    <CardContainer>
      <Link to={`/detail/${programId}`}>
        <MoviePoster src={image}/>
        </Link>
        <DetailContainer>

            <ContextRow>
                <Title>{title}</Title>
                <MovieData>{`${year} ‧ ${genreA} / ${genreB}`}</MovieData>
            </ContextRow>

            <OverviewText>
                {showFullComments && overview.length > 270 ? overview.slice(0, 270) + " " +  "..." : overview }
                { overview.length > 270 && (
                  <ButtonFullComments onClick={() => setShowFullComments(!showFullComments)}>
                    {showFullComments ? "Read less" : "Read more"}
                  </ButtonFullComments>
                )}
            </OverviewText>

            <ContextRow>
              <OverviewText>{reviewDate}</OverviewText>
              <StarsRow>{starsCount}</StarsRow>
            </ContextRow>

        </DetailContainer>
    </CardContainer>
  );
};