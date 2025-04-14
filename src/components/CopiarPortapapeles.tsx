import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const CopiarPortapapeles: React.FC = () => {
  const [copiado, setCopiado] = useState(false);

  const copiarAlPortapapeles = () => {
    const texto = "CLABE: 710969000014534870 Nombre: Ian Márquez Olvera"; 
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        setCopiado(true); 
        setTimeout(() => setCopiado(false), 2000); 
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  };

  return (

      <button className="copiar-al-portapapeles" onClick={copiarAlPortapapeles}>
        <FontAwesomeIcon icon={faCopy} />
        {copiado ?  "¡Copiado!" : " Copiar"}
      </button>

  );
};

export default CopiarPortapapeles;
