import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Welcome = ({ isLoggedin, setIsLoggedin }) => {
  const logoutHandler = () => {
    alert("successfully logged out");
    setIsLoggedin(false);
  };

  return (
    <div>
      Welcome to home page
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Welcome
