import "./Styles/App.css";
import Language from "./Language";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Title from "./Pages/Title";
import Logo from "./Styles/logo.webp";
import { useState, useEffect } from "react";
import { IoLanguage } from "react-icons/io5";
import AddCourse from "./Pages/AddCourse";
import Addcamp from "./Pages/Addcamp";
export default function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const paths = window.location.pathname.split("/");
    if (paths.length > 1 && paths[1] == "title") setPage(1);
    else if (paths.length > 1 && paths[1] == "profile") setPage(2);
  }, []);

  return (
    <>
      <Router>
        <div className="top-bar">
          <div>
            <img src={Logo} id="logo-top-bar" />
          </div>
          <div
            className={
              page == 0
                ? "top-bar-page-selected notranslate"
                : "top-bar-page notranslate"
            }
          >
            <Link
              to="/"
              onClick={() => {
                setPage(0);
              }}
            >
              Home
            </Link>
          </div>
          <div
            className={
              page == 1
                ? "top-bar-page-selected notranslate"
                : "top-bar-page notranslate"
            }
          >
            <Link
              to="/title"
              onClick={() => {
                setPage(1);
              }}
            >
              Trainer
            </Link>
          </div>
          <div
            className={
              page == 2
                ? "top-bar-page-selected notranslate"
                : "top-bar-page notranslate"
            }
          >
            <Link
              to="/profile"
              onClick={() => {
                setPage(2);
              }}
            >
              Profile
            </Link>
          </div>
          <div
            className={
              page == 3
                ? "top-bar-page-selected notranslate"
                : "top-bar-page notranslate"
            }
          >
            <Link
              to="/add-course"
              onClick={() => {
                setPage(3);
              }}
            >
              Add Course
            </Link>
          </div>
          <div
            className={
              page == 4
                ? "top-bar-page-selected notranslate"
                : "top-bar-page notranslate"
            }
          >
            <Link
              to="/add-camp"
              onClick={() => {
                setPage(4);
              }}
            >
              Add Camp
            </Link>
          </div>
          <div id="lang-container">
            <IoLanguage className="lang-icon" color="#004277" />
            <Language />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/title" element={<Title />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/add-camp" element={<Addcamp />} />
        </Routes>
      </Router>
    </>
  );
}
