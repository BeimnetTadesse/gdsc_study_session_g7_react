import React from 'react';
import './styles.css';

export const GroupMembersList = () => {
  const groupMembers = [
{ 
  'name' : ' abel',
  'year' : 3
},
{ 
  'name' : ' abdella',
  'year' : 2
},
{ 
  'name' : ' adey',
  'year' : 3
},
{ 
  'name' : ' beimnet',
  'year' : 2
},
{ 
  'name' : ' abenezer',
  'year' : 2
},
  ];

  return (
    <div className='container'> 
      <h2>Group Members</h2>
      <ul>
        {groupMembers.map((item, index) => (
          <li key={index}>
           <h1> name:{item.name}</h1>
          <p> year:{item.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


