import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import EventPage from "./views/EventPage";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
