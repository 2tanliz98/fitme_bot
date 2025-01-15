import React from "react";
import { useNavigate } from "react-router-dom";

import "./planes_form.css"

const PlanSelector: React.FC = () => {
  // Definir los planes en un array
  const plans = ['Plan A', 'Plan B', 'Plan C'];

  //const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const navigate = useNavigate();

    const handlePlanSelect = (plan: string) => {
    // Navegamos a la ruta de detalles con el nombre del plan como parámetro
    navigate(`/plan/${plan}`);
    };


  return (
    <div className="plan-selector-container">
      <h2>Selecciona un Plan</h2>
      <div className="row">
        {plans.map((plan) => (
          <div className="col-12 col-sm-4 mb-2 plan-buttons" key={plan}>
            <button
              className="btn"
              onClick={() => handlePlanSelect(plan)}
            >
              {plan}
            </button>
          </div>
        ))}
      </div>
      {/*selectedPlan && <p>Has seleccionado: {selectedPlan}</p> && <></>*/}
    </div>
  );
};

export default PlanSelector;
