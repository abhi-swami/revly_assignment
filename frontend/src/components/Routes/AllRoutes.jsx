import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Auth/Login";
// import {Signup} from "../Auth/Signup"
import { Signup } from "../Auth/Signup";


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={ <Signup />} />
    </Routes>
  )
}
