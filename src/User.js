
import React from 'react';
import ReactDOM from 'react-dom';


function User(user) {
    return User(user);
  
};
  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
  };
  
  const element = (
    <h1>
      Hello, {User(user)}!
    </h1>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );

  export default User;