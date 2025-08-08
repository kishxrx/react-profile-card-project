import React from 'react';
import ProfilePicture from './ProfilePicture.jsx'; // Add .jsx here too!
import UserInfo from './UserInfo.jsx';             // And here!
import HobbyList from './HobbyList.jsx';           // And here!

function ProfileCard() {
  const myHobbies = ["Containerizing Apps", "Interactive UI Crafting", "Art", "Gym"];

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6">
      <ProfilePicture image="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Oliver" />
      <UserInfo name="KISHORE" bio="From UI to deployment pipelines. Exploring the worlds of front-end, back-end, and DevOps. Always learning, always building." />
      <HobbyList hobbies={myHobbies} />
    </div>
  );
}

export default ProfileCard;
