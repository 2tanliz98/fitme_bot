import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlanDetalle from "./components/PlanDetalle"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plan/:planName" element={<PlanDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
