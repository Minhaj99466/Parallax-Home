import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Example from "./Components/Button";
import UserRoute from "./Routes/Route";

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/*' element={<UserRoute/>} />
      </Routes>

    </Router>
  );
}

export default App;
