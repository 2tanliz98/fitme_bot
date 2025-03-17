import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Calendario from "../components/Calendario";
import { Ejercicio } from "../types"; 
import { useNavigate } from "react-router-dom";


interface Rutina {
  dia: string;
  ejercicios: Ejercicio[];
}

const HomePage: React.FC = () => {
  const [rutinas, setRutinas] = useState<Rutina[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRutina, setSelectedRutina] = useState<Rutina | null>(null);
  const [width, setWidth] = React.useState(window.innerWidth);

  // Rutinas simuladas para propósitos de prueba
  useEffect(() => {
    const rutinasSimuladas: Rutina[] = [
      {
        dia: "1",
        ejercicios: [
          {
            nombre: "Flexiones",
            material: "Ninguno",
            sets: 3,
            repeticiones: [15, 12, 10], // Repeticiones por set
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
          },
          {
            nombre: "Sentadillas",
            material: "Ninguno",
            sets: 4,
            repeticiones: [20, 18, 15, 12],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=aclHkVaku9U",
          },
          {
            nombre: "Press de banca",
            material: "Banca y barra",
            sets: 4,
            repeticiones: [12, 10, 8, 6],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
          },
        ],
      },
      {
        dia: "2",
        ejercicios: [
          {
            nombre: "Flexiones",
            material: "Ninguno",
            sets: 3,
            repeticiones: [15, 12, 10], // Repeticiones por set
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
          },
          {
            nombre: "Sentadillas",
            material: "Ninguno",
            sets: 4,
            repeticiones: [20, 18, 15, 12],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=aclHkVaku9U",
          },
          {
            nombre: "Press de banca",
            material: "Banca y barra",
            sets: 4,
            repeticiones: [12, 10, 8, 6],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
          },
        ],
      },
      {
        dia: "3",
        ejercicios: [
          {
            nombre: "Flexiones",
            material: "Ninguno",
            sets: 3,
            repeticiones: [15, 12, 10],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
          },
          {
            nombre: "Sentadillas",
            material: "Ninguno",
            sets: 4,
            repeticiones: [20, 18, 15, 12],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=aclHkVaku9U",
          },
          {
            nombre: "Press de banca",
            material: "Banca y barra",
            sets: 4,
            repeticiones: [12, 10, 8, 6],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
          },
        ],
      },
      {
        dia: "4",
        ejercicios: [
          {
            nombre: "Flexiones",
            material: "Ninguno",
            sets: 3,
            repeticiones: [15, 12, 10],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
          },
          {
            nombre: "Sentadillas",
            material: "Ninguno",
            sets: 4,
            repeticiones: [20, 18, 15, 12],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=aclHkVaku9U",
          },
          {
            nombre: "Press de banca",
            material: "Banca y barra",
            sets: 4,
            repeticiones: [12, 10, 8, 6],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
          },
        ],
      },
      {
        dia: "5",
        ejercicios: [
          {
            nombre: "Flexiones",
            material: "Ninguno",
            sets: 3,
            repeticiones: [15, 12, 10],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
          },
          {
            nombre: "Sentadillas",
            material: "Ninguno",
            sets: 4,
            repeticiones: [20, 18, 15, 12],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=aclHkVaku9U",
          },
          {
            nombre: "Press de banca",
            material: "Banca y barra",
            sets: 4,
            repeticiones: [12, 10, 8, 6],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
          },
        ],
      },
      {
        dia: "6",
        ejercicios: [
          {
            nombre: "Flexiones",
            material: "Ninguno",
            sets: 3,
            repeticiones: [15, 12, 10],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
          },
          {
            nombre: "Sentadillas",
            material: "Ninguno",
            sets: 4,
            repeticiones: [20, 18, 15, 12],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=aclHkVaku9U",
          },
          {
            nombre: "Press de banca",
            material: "Banca y barra",
            sets: 4,
            repeticiones: [12, 10, 8, 6],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
          },
        ],
      },
      {
        dia: "7",
        ejercicios: [
          {
            nombre: "Flexiones",
            material: "Ninguno",
            sets: 3,
            repeticiones: [15, 12, 10],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
          },
          {
            nombre: "Sentadillas",
            material: "Ninguno",
            sets: 4,
            repeticiones: [20, 18, 15, 12],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=aclHkVaku9U",
          },
          {
            nombre: "Press de banca",
            material: "Banca y barra",
            sets: 4,
            repeticiones: [12, 10, 8, 6],
            descanso: 5,
            enlaceYoutube: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
          },
        ],
      },
    ];
    setRutinas(rutinasSimuladas);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getWidth = () => {
    if (width > 1200) return "900px";
    if (width > 768) return "95%";
    if (width > 480) return "95%";
    return "100%";
  };

  const openModal = (rutina: Rutina) => {
    setSelectedRutina(rutina);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedRutina(null);
  };
  const navigate = useNavigate();

  const handleStartRoutine = () => {
    // Cuando se haga clic en el botón "Iniciar", pasamos la rutina al componente Routine.
    if (selectedRutina) {
      console.log("Iniciando rutina:", selectedRutina);
      // Redirigir a la página de rutina con la rutina seleccionada como 'state'
      navigate("/rutina", { state: { rutina: selectedRutina } });
    } else {
      console.log("No hay rutina seleccionada.");
    }
  };

  return (
    <section className="home-background">
      <Header />
      <div
        className="card-primary-transparent"
        style={{ marginTop: "4em", width: getWidth() }}
      >
        <h2>¡Bienvenido @username!</h2>
        <p>Hoy es el primer paso hacia la mejor versión de ti.</p>
      </div>
      <Calendario />
      <h2 style={{ backgroundColor: "rgb(176, 176, 176, 0.5)" }}>
        Mis rutinas semanal
      </h2>
      <div className="grid-container">
        {rutinas.map((rutina, index) => (
          <div
            key={index}
            onClick={() => openModal(rutina)}
            className="grid-item"
          >
            <div className="days-title">Día {rutina.dia}</div>
            <img className="days-photo" src="mdn-logo-sm.png" alt="MDN" />
          </div>
        ))}

        {/* Modal para mostrar detalles de la rutina seleccionada */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
            content: { display: "grid" },
          }}
        >
          <h2>Detalles de la rutina</h2>
          {selectedRutina && (
            <>
              <p>Día: {selectedRutina.dia}</p>
              <h3>Ejercicios:</h3>
              <ul>
                {selectedRutina.ejercicios.map((ejercicio, index) => (
                  <li key={index}>
                    {ejercicio.nombre}{" "}
                    {ejercicio.material && (
                      <span>(Material: {ejercicio.material})</span>
                    )}
                  </li>
                ))}
              </ul>
              <div>
                <button
                  className="modal-button-ok"
                  onClick={handleStartRoutine}
                >
                  Iniciar
                </button>
                <button className="modal-button-cancel" onClick={closeModal}>
                  Cerrar
                </button>
              </div>
            </>
          )}
        </Modal>
      </div>
      <Footer />

      {/* Aquí pasamos la rutina seleccionada al componente Routine */}
    </section>
  );
};

export default HomePage;
