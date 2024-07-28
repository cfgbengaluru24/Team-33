import "./Styles/login.css";
import LoginPanel from "./LoginPanels/loginPanel.jsx";
import RegisterPanel from "./LoginPanels/registerPanel.jsx";
import { useState } from "react";
export default function Login({ setUser }) {
  const [isRegistered, setRegistered] = useState(true);
  return (
    <>
      {isRegistered ? (
        <LoginPanel setUser={setUser} setRegistered={setRegistered} />
      ) : (
        <RegisterPanel setUser={setUser} setRegistered={setRegistered} />
      )}
    </>
  );
}
