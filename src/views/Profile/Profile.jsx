
import React from 'react';

const UserProfile = () => {
//   const user = useSelector(state => state.user);

  return (
    <div className="profile">
      <img src={user.avatar} alt="Avatar" className="avatar" />
      <img src={user.background} alt="Background" className="background" />
      <h1>{user.name}</h1>
      <p>{user.description}</p>
    </div>
  );
};

export default UserProfile;

const user = {
	"id": "fd846e69-9779-4a2b-af7a-ccee3a80cd32",
	"admin": false,
	"banned": false,
	"name": "Jorge",
	"nickname": "ElJorge123",
	"avatar": "https://randomuser.me/api/portraits/men/75.jpg",
    "background": "https://random.imagecdn.app/500/150",
    "description": "may the fourth be with you",
	"password": "123456",
	"status": "caminando",
	"email": "hola@gmail.com",
	"PlaylistId": null
}