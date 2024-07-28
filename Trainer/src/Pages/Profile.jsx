import { useContext } from "react";
import { UserContext } from "../Content";
export default function Profile() {
  const user = useContext(UserContext);
  return (
    <div>
      <div>Name:</div>
      <div>{user.name}</div>
      <div>Username:</div>
      <div>{user.username}</div>
      <button
        onClick={() => {
          window.localStorage.clear();
          window.location.reload();
        }}
      >
        Log Out
      </button>
    </div>
  );
}
