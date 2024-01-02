import axios from "axios";
import { useState, createContext } from "react";
async function login(name) {
  return await axios.post("/api/login", { name }).then((res) => {
    // console.log(res);
    return res.data;
  });
}
const UserContext = createContext({
  user: {
    name: "",
    logined: false,
    id: "",
  },
  login: () => {},
  logout: () => {},
});

function useUser() {
  const [user, setUser] = useState({
    name: "",
    logined: false,
    id: "",
  });
  const loginAndSetUser = async (inputName) => {
    const data = await login(inputName);
    setUser({
      name: data.name,
      logined: true,
      id: data._id,
    });
  };
  const logout = async () => {
    setUser({
      name: "",
      logined: false,
      id: "",
    });
  };
  return [user, loginAndSetUser, logout];
}
export { useUser, UserContext };
