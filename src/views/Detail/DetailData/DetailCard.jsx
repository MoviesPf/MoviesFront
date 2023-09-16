import {ProgramData, DetailContainer, ContextRow, Title, MovieData, OverviewText, CastContainer } from "./DetailCard.Styled"

export const DetailCard = ({props}) => {
   const {year, runtimeFormatted, programDetail} = props;

  return (
    <ProgramData>
      <DetailContainer>
        <ContextRow>
          <Title>{programDetail.title}</Title>
          <MovieData>{`${year} ‧ ${programDetail?.Genres?.map(g => g.name).slice(0, 2).join(' / ')}  ‧ ${runtimeFormatted}`}</MovieData>
        </ContextRow>
        
        <OverviewText>{programDetail.overview}</OverviewText>
        <CastContainer>{programDetail?.cast?.map(c => c.split(' - ')[0]).slice(0, 5).join(', ')}</CastContainer>
      </DetailContainer>
    </ProgramData>
  )
}