import { CButton, CContainer, CForm } from "@coreui/react";
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import EventsList from "../components/Events";
import events from "../../events.json";
import login from "../utils/login";
const Home = () => {
  const [search, setSearch] = useState("");
  const [inputName, setInputName] = useState(""); // [1
  const handleSearch = (eventValue) => {
    setSearch(eventValue);
  };
  const [user, setUser] = useState({
    name: "",
    logined: false,
    id: "",
  });
  return (
    <CContainer className="d-flex flex-column p-2">
      <CForm className="d-flex flex-row justify-content-between">
        {user.logined ? (
          <>
            <p className="fs-3">{user.name}</p>
            <CButton
              onClick={(e) => {
                e.preventDefault();
                setUser({
                  name: "",
                  logined: false,
                  id: "",
                });
              }}
            >
              登出
            </CButton>
          </>
        ) : (
          <>
            <input
              placeholder="輸入您的姓名(帳號)"
              required
              type="text"
              className="rounded"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
            />
            <CButton
              type="submit"
              disabled={!inputName}
              onClick={async (e) => {
                e.preventDefault();
                const data = await login(inputName);
                setUser({
                  name: data.name,
                  logined: true,
                  id: data.id,
                });
              }}
            >
              登入
            </CButton>
          </>
        )}
      </CForm>
      <SearchBox handleSearch={handleSearch} />
      <EventsList events={events} search={search} />
    </CContainer>
  );
};

export default Home;
