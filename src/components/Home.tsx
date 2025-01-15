import React from "react";
import PlanesSeleccion from "./PlanesSeleccion"; 

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="centered">¡Hola, bienvenido a Fitme 👋!</h1>
      <PlanesSeleccion />
    </div>
  );
};

export default Home; 
