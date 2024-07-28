import { createContext, useEffect, useState } from "react";
import App from "./App";
import Login from "./Login";
export const UserContext = createContext(null);
export default function Content() {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("loggedUser"))
  );
  return (
    <UserContext.Provider value={user}>
      {user ? <App /> : <Login setUser={setUser} />}
    </UserContext.Provider>
  );
}
