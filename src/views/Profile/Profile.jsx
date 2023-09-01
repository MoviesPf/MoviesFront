
import React from 'react';
import NavProfile from '../../Components/NavProfile/NavProfile';

const Profile = () => {
//   const user = useSelector(state => state.user);


  return (
    <div className="profile">
      <img src={user.avatar} alt="Avatar" className="avatar" />
      <img src={user.background} alt="Background" className="background" />
      <h1>{user.name}</h1>
      <p>{user.status}</p>
      <NavProfile/>
    </div>
  );
};

export default Profile;

const user = {
    "id": "df76d866-783a-4f23-8a9d-18e715fa1ebc",
		"name": "Marcelo",
		"nickname": "ElMariano123",
		"avatar": "https://randomuser.me/api/portraits/men/75.jpg",
		"email": "chau@gmail.com",
		"password": "123456",
		"status": "may the fourth be with you",
		"admin": false,
		"banned": false,
		"PlaylistId": null,
        "background": "https://random.imagecdn.app/500/150",
}