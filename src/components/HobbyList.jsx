import React from 'react';

function HobbyList(props) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-700 text-center">Hobbies</h2>
      <ul className="mt-2 flex flex-wrap justify-center gap-2">
        {props.hobbies.map(hobby => (
          <li key={hobby} className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;
