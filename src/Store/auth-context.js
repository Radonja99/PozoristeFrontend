import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  id: "",
  admin: "",
  login: (token, id, admin) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {

  const initialToken = localStorage.getItem('token');
  const initialID = localStorage.getItem('id');
  const initialAdmin = localStorage.getItem('admin');
  const [token, setToken] = useState(initialToken);
  const [id, setID] = useState(initialID);
  const [admin, setAdmin] = useState(initialAdmin);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, id, admin) => {

    setToken(token);
    localStorage.setItem('token', token);
    setID(id);
    localStorage.setItem('id', id);
    setAdmin(admin);
    localStorage.setItem('admin', admin);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    setID(null);
    localStorage.removeItem('id');
    setAdmin(null);
    localStorage.removeItem('admin');
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    id: id,
    admin: admin,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

//ovde cu pozvati fetch po imenu tog korisnika i onda uzeti njegov ID kontam
