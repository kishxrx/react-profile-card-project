import React from 'react';

function ProfilePicture(props) {
  return (
    <img
      className="w-32 h-32 rounded-full mx-auto shadow-lg"
      src={props.image}
      alt="Profile"
    />
  );
}

export default ProfilePicture;
