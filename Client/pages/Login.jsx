import { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
  });

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
      await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await JSON.stringify(userinfo),
      });

      console.log("Login Successfully");
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
