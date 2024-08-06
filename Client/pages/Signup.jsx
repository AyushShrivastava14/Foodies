import { useState } from "react";
import SignUpForm from "../components/SignUpForm";

export default function Signup() {
  const [userinfo, setuserinfo] = useState({
    name: "",
    rollNo: "",
    branch: "",
    question: "",
    answer: "",
    role: "",
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
      console.log("Started Signing up");

      // Req through fetch api
      await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await JSON.stringify(userinfo),
      });

      console.log("Signed Up Successfully");
    } catch (error) {
      console.log(`${error} in handleSubmit`);
    }
  };

  return (
    <SignUpForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    ></SignUpForm>
  );
}
