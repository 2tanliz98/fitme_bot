import React from "react";
import { useParams } from "react-router-dom";

import "./planes_form.css";

const PlanDetalle: React.FC = () => {
  const { planName } = useParams<{ planName: string }>(); // Obtenemos el nombre del plan desde la URL

  return (
    <div className="plan-detail-container">
      <h2>Detalle del {planName}</h2>
      <p>
        Has elegido el plan: <strong>{planName}</strong>
      </p>
      <p>Método de Pago: Transferencia Bancaria</p>
      <p>
        El número de cuenta a realizar la transferencia es el siguiente: XXX
        XXXX XXXX
      </p>
      <p>A nombre de:  Ian </p>
    </div>
  );
};

export default PlanDetalle;
