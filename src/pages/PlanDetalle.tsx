import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


import "../scss/planes_form.css";
import CopiarPortapapeles from "../components/CopiarPortapapeles";

const PlanDetalle: React.FC = () => {
    const { planName } = useParams<{ planName: string }>(); // Obtenemos el nombre del plan desde la URL
    const navigate = useNavigate();

  const handleButtonClick = () => {
        Swal.fire({
          title: "Pasos siguientes:",
          text: ` 1. Realizar tu registro. 2. ¡Inicia sesión y comienza tu plan!`,
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Continuar",
          cancelButtonText: "Cancelar",
          customClass: {
            popup: "my-content-swal",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/registro/`);
          }
        });
     };

  return (
    <div className="plan-detail-container">
      <div className="plan-background">
        <div>
          <CopiarPortapapeles />
        </div>

        <div>
          <h3>
            <strong>Has elegido el plan: {planName}</strong>
          </h3>
          <p>Método de Pago: Transferencia Bancaria</p>
          <p>
            El número de cuenta a realizar la transferencia es el siguiente
            CLABE: 710969000014534870
          </p>
          <p>A nombre de: Ian Márquez Olvera </p>
        </div>
        <div>
          <button className="btnDetalle" onClick={handleButtonClick}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetalle;
