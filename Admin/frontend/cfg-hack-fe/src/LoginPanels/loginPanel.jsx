import { GoArrowRight } from "react-icons/go";
import { CgSpinner } from "react-icons/cg";
import abstract from "../Styles/abstract.png";
import axios from "axios";
import { useEffect, useState } from "react";
export default function LoginPanel({ setUser, setRegistered }) {
  const [userName, setUserName] = useState(null);
  const [password, setPassWord] = useState(null);
  const [userRole, setRole] = useState("1");
  const handleSubmit = () => {
    const userCredentials = {
      username: userName,
      password: password,
    };
    axios
      .post("http://localhost:3003/api/login/", userCredentials)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        window.localStorage.setItem(
          "loggedUser",
          JSON.stringify(response.data)
        );
      });
  };
  useEffect(() => {
    if (userRole == "0") {
      window.location.href = "http://localhost:5174/";
    }
  }, [userRole]);
  return (
    <div className="login-panel">
      <div className="login-heading">Welcome Back</div>
      <div className="register-link">
        Don't Have An Account ? &nbsp;&nbsp;{" "}
        <span
          className="register-link-elem"
          onClick={() => {
            setRegistered(false);
          }}
        >
          Sign Up
        </span>
      </div>
      <select
        className="select-options"
        value={userRole}
        onChange={(e) => {
          setRole(e.target.value);
        }}
      >
        <option value={"1"}>Admin</option>
        <option value={"0"}>Trainer</option>
      </select>
      <div className="login-input-text">Username</div>
      <input
        type="text"
        className="login-input"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <div className="login-input-text">Password</div>
      <input
        type="password"
        className="login-input"
        value={password}
        onChange={(e) => {
          setPassWord(e.target.value);
        }}
      />
      <br />
      <div id="login-submit-container">
        <button id="login-submit" onClick={handleSubmit}>
          <GoArrowRight size={24} />
        </button>
      </div>
      <img src={abstract} className="login-image"></img>
    </div>
  );
}
