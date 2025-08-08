import React from 'react';

function UserInfo(props) {
  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl font-bold text-gray-800">{props.name}</h1>
      <p className="text-md text-gray-500 mt-1">{props.bio}</p>
    </div>
  );
}

export default UserInfo;
