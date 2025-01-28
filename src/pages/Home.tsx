import React, { Fragment } from "react";
import PlanesSeleccion from "./PlanesSeleccion";  
import "../index.css"

const Home: React.FC = () => {
  return (
    <Fragment>
      <section>
        <h1 className="centered">¡Hola, bienvenido a FiTme 👋!</h1>
        <div className="section-content">
          FiTme es una aplicación de rutinas de ejercicio certificada por
          especialistas, diseñada para gimnasio o casa, enfocada en alto
          rendimiento constante y fortalecimiento físico.
          <br /> En casa es Ideal contar con mancuernas para resultados óptimos.
        </div>
      </section>

      <PlanesSeleccion />

      <section>
        <h2>
          <i> Aviso importante:</i>
        </h2>
        El uso de esta aplicación es responsabilidad exclusiva de quien la
        utiliza y de quien la recomienda. Esta aplicación tiene fines
        informativos y no sustituye el consejo, diagnóstico o tratamiento médico
        profesional. Antes de iniciar cualquier actividad, programa o
        recomendación sugerida en esta aplicación, consulte a su médico o a un
        profesional de la salud calificado. El desarrollador de esta aplicación
        no se hace responsable de ningún daño, pérdida o inconveniente derivado
        del uso de la misma. poner botón de siguiente para pasar a pantalla de
        datos.
      </section>
    </Fragment>
  );
};

export default Home; 
