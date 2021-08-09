import React from 'react';

const UserContext = React.createContext({
    url: '',
    setUrl: (u:string) => {},
  });

export default UserContext;