import axios from "axios";
export default async function login(name) {
  return await axios.post("/api/login", { name }).then((res) => {
    console.log(res);
    return res.data;
  });
}
