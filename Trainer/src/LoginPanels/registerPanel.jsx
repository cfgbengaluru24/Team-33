import { GoArrowRight } from "react-icons/go";
import axios from "axios";
import { useEffect, useState } from "react";
export default function RegisterPanel({ setRegistered }) {
  const [userName, setUserName] = useState(null);
  const [password, setPassWord] = useState(null);
  const [confirmPassword, setConfirmPassWord] = useState(null);
  const [name, setName] = useState(null);

  const handleSubmit = () => {
    if (confirmPassword != password) return;

    const userCredentials = {
      username: userName,
      password: password,
      name: name,
      role: 0,
    };

    axios
      .post("http://localhost:3003/api/register/", userCredentials)
      .then((response) => {
        console.log(response.data);
        setRegistered(true);
      });
  };
  return (
    <div className="login-panel">
      <div className="login-heading">Welcome Back</div>
      <div className="register-link">
        Already Have An Account ? &nbsp;&nbsp;{" "}
        <span
          className="register-link-elem"
          onClick={() => {
            setRegistered(true);
          }}
        >
          Log In
        </span>
      </div>
      <div className="login-input-text">Name</div>
      <input
        type="text"
        className="login-input"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
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
      <div className="login-input-text">Confirm Password</div>
      <input
        type="password"
        className="login-input"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassWord(e.target.value);
        }}
      />
      <br />
      <div id="login-submit-container">
        <button id="login-submit" onClick={handleSubmit}>
          <GoArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
