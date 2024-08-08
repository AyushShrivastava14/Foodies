import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { saveToken, deleteToken } = useContext(AuthContext);

  const handleInput = (event) => {
    const targetName = event.target.name;
    const value = event.target.value;

    setuserinfo({ ...userinfo, [targetName]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Started Login");

      // Req through fetch api
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });
      console.log("Login Successfully");

      const res = await response.json();

      console.log('Verification Started');

      if(res.valid === -1) {
        const data = { token: res.token, email: userinfo.email };
        saveToken(data);
        navigate('/');
        setTimeout(deleteToken, 300*1000);
      }
      else if(res.valid === 1) {
        alert('Invalid Email or Password');
      }
      else {
        alert('No User Found, Please Sign-up');
        navigate('/signup');
      }
      console.log('Verification Ended');
    } catch (error) {
      console.log(`${error} in handleSubmit`);
    }
  };

  return (
    <LoginForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    ></LoginForm>
  );
}
