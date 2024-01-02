import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import EventPage from "./views/EventPage";

import { useUser, UserContext } from "./utils/login";
function App() {
  const [user, login, logout] = useUser();
  return (
    <Router>
      <UserContext.Provider
        value={{
          user,
          login,
          logout,
        }}
      >
        <Routes>
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
