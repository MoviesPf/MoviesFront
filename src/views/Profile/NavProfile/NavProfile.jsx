import { NavContainer, LinksContainer, ViewButton, IconsC, IconContainer, IconImg, IconLabel, EditButton } from "./NavProfile.Styled"

import favIcon from "../../../assets/Icons/icons8-love-90.png"
import ViewsIcon from "../../../assets/Icons/icons8-view-90.png"
import PendingIcon from "../../../assets/Icons/icons8-delivery-time-96.png"

export const NavProfile = ({menu, setMenu, favorites, watchlist, watched}) => {

  const setProfile = ()=> {
    setMenu("Profile")
  }

  const setReviews = ()=> {
    setMenu("Reviews")
  }

  const setFavorites = ()=> {
    setMenu("Favorites")
  }

  const setWatched = ()=> {
    setMenu("Watched")
  }

  const setWatchlist = ()=> {
    setMenu("Watchlist")
  }

  return (
    <NavContainer>
      <LinksContainer>
        <ViewButton onClick={setProfile} $check={menu === "Profile" ? true : false}>Profile</ViewButton>
        <ViewButton onClick={setReviews} $check={menu === "Reviews" ? true : false}>Reviews</ViewButton>
        <ViewButton onClick={setFavorites} $check={menu === "Favorites" ? true : false}>Favorites</ViewButton>
        <ViewButton onClick={setWatched} $check={menu === "Watched" ? true : false}>Watched</ViewButton>
        <ViewButton onClick={setWatchlist} $check={menu === "Watchlist" ? true : false}>Watchlist</ViewButton>
      </LinksContainer>

      <IconsC>
        <IconContainer>
          <IconImg src={ViewsIcon}></IconImg>
          <IconLabel>{ watched ? watched.programs.length : 0}</IconLabel>
        </IconContainer>
        <IconContainer>
          <IconImg src={favIcon}></IconImg>
          <IconLabel>{ favorites ? favorites.programs.length : 0}</IconLabel>
        </IconContainer>
        <IconContainer>
          <IconImg src={PendingIcon}></IconImg>
          <IconLabel>{ watchlist ? watchlist.programs.length : 0}</IconLabel>
        </IconContainer>
      </IconsC>

      <EditButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
      </EditButton>

    </NavContainer>

  );
};