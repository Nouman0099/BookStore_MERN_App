import React from "react";
import Home from "./home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ContactUs from "./contact/ContactUs";
import AboutUs from "./about/AboutUs";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/course"
              element={authUser ? <Courses /> : <Navigate to="/signup" />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </>
  );
}

export default App;
