import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

interface CardProps {
  img: string;
  btnText: string;
  planName: string;
}

const Card: React.FC<CardProps> = ({ img, btnText, planName }) => {
     const navigate = useNavigate();

     const handleButtonClick = () => {
        Swal.fire({
          title: "Aviso importante:",
          text: ` El uso de esta aplicación es responsabilidad exclusiva de quien la
                utiliza y de quien la recomienda. Esta aplicación tiene fines
                informativos y no sustituye el consejo, diagnóstico o tratamiento médico
                profesional. Antes de iniciar cualquier actividad, programa o
                recomendación sugerida en esta aplicación, consulte a su médico o a un
                profesional de la salud calificado. El desarrollador de esta aplicación
                no se hace responsable de ningún daño, pérdida o inconveniente derivado
                del uso de la misma. poner botón de siguiente para pasar a pantalla de
                datos.`,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Sí, acepto",
          cancelButtonText: "Cancelar",
          customClass: {
            popup : "my-content-swal",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/plan/${planName}`);
          }
        });
        };
     


  return (
    <div className="card">
      <div className="card-content">
        <img src={img} alt="Card Image" className="card-image" />
        <button className="card-button" onClick={handleButtonClick}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
