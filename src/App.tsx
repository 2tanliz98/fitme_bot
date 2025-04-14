import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import  "./scss/session.css"

// Páginas
import Home from "./pages/Home";
import PlanDetalle from "./pages/PlanDetalle";
import Registro from "./pages/Registro";
import HomePage from "./pages/HomePage";
import Routine from "./pages/Rutina";
import TelegramLogin from "./pages/TelegramLogin";

// Componentes
// import Cronometro from "./components/CircularProgress";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<TelegramLogin/>}/>

        <Route path="/plan/:planName" element={<PlanDetalle />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/cronometro" element={<Cronometro />} /> */}
        <Route path="/rutina" element={<Routine />} />
      </Routes>
    </Router>
  );
}

export default App;
