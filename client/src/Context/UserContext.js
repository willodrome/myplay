import React, { createContext, useState, useEffect, useContext } from "react";

const mockUser = {
  firstName: "Rony",
  lastName: "Levy",
  avatar: "user-avatar-001.png",
};

export const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

const UserContextProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const login = () => {
    setUser(mockUser);
  };

  const getUser = () => {
    setUser(mockUser);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        setUser,
        getUser,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
