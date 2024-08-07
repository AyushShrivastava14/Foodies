import { createContext, useState } from "react";

export const AuthContext = createContext("");

const Authstate = (props) => {
    const [authinfo, setToken] = useState(() => {
      const storedAuthinfo = localStorage.getItem("authinfo");
      return storedAuthinfo ? JSON.parse(storedAuthinfo) : {};
    });

    const saveToken = (authinfo1) => {
      setToken((prevstate) => {
        const newState = { ...prevstate, token: authinfo1.token, email: authinfo1.email };
        localStorage.setItem("authinfo", JSON.stringify(newState));
        return newState;
      });
    };

    const deleteToken = () => {
      setToken(null);
      localStorage.removeItem("authinfo");
    };

    return (
      <AuthContext.Provider value={{ authinfo, saveToken, deleteToken }}>
        {props.children}
      </AuthContext.Provider>
    );
};

export default Authstate;