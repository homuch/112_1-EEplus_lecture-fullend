import { CButton, CContainer, CForm } from "@coreui/react";
import { useState, useContext } from "react";
import SearchBox from "../components/SearchBox";
import EventsList from "../components/Events";
// import events from "../../events.json";
import { UserContext, useAllEvents } from "../utils";
const Home = () => {
  const [search, setSearch] = useState("");
  const [inputName, setInputName] = useState(""); // [1
  const { login, user, logout } = useContext(UserContext);
  const [events, refresh] = useAllEvents(search, user.id);
  const handleSearch = (eventValue) => {
    setSearch(eventValue);
  };
  return (
    <CContainer className="d-flex flex-column p-2">
      <CForm className="d-flex flex-row justify-content-between">
        {user.logined ? (
          <>
            <p className="fs-3">{user.name}</p>
            <CButton
              onClick={(e) => {
                e.preventDefault();
                logout();
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
                login(inputName);
                refresh();
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
