import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlanDetalle from "./pages/PlanDetalle"
import Registro from "./pages/Registro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plan/:planName" element={<PlanDetalle />} />
        <Route path="/registro" element={<Registro/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
