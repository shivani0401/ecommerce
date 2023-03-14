import React, { useState } from "react";
import "./style.css";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Signin = ({
  name,
  password,
  isLoggedin,
  setIsLoggedin,
  setName,
  setPassword,
}) => {
  const submitHandler = () => {
    if (!name || !password) {
      alert("fields cannot be empty");
    }else{
      if (name === 'shivani' && password ==='123456') {
        alert("login successfull");
        setIsLoggedin(true);
      } else {
        alert("invalid credentials");
      }
    }
  };
  if (isLoggedin) {
    return <Navigate to="/home" />;
  }
  const nameHandler =(e)=>{
    setName(e.target.value);
  }
  const passwordHandler =(e)=>{
    setPassword(e.target.value);
  }
  console.log(name,password);
  return (
    <div>
      <div className="signin">
        <h1>Signin</h1>
        <input
          placeholder="Username"
          value={name}
          onChange={nameHandler}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={passwordHandler}
          type="password"
        />
        <Button onClick={submitHandler} type="submit">
          Signin
        </Button>

        {name && <p>Name: {name}</p>}
        {password && <p>Password: {password}</p>}
      </div>
    </div>
  );
};
export default Signin