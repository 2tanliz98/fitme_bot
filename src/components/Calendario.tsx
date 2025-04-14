import React, { useState } from "react";
import {
  format,
  startOfWeek,
  addWeeks,
  subWeeks,
  isToday,
  eachDayOfInterval,
} from "date-fns";
import { es } from "date-fns/locale";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { BottomNavigationAction } from "@mui/material";

const Calendario: React.FC = () => {
  const hoy = new Date();

  const [semanaActual, setSemanaActual] = useState<Date>(() =>
    startOfWeek(hoy, { weekStartsOn: 0 })
  );

  const obtenerDiasDeLaSemana = (inicioDeSemana: Date) => {
    return eachDayOfInterval({
      start: inicioDeSemana,
      end: addWeeks(inicioDeSemana, 1),
    }).slice(0, 7);
  };

  const diasDeLaSemana = obtenerDiasDeLaSemana(semanaActual);

  const irASiguienteSemana = () => {
    setSemanaActual((anterior) => addWeeks(anterior, 1));
  };

  const irASemanaAnterior = () => {
    setSemanaActual((anterior) => subWeeks(anterior, 1));
  };

  return (
    <div style={{ backgroundColor: "rgb(176, 176, 176, 0.5)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <BottomNavigationAction
          onClick={irASemanaAnterior}
          style={{ marginRight: "10px" }}
          icon={<KeyboardArrowLeftIcon />}
        />
        <h4>{format(semanaActual, "MMMM yyyy", { locale: es })} </h4>
        <BottomNavigationAction
          onClick={irASiguienteSemana}
          style={{ marginLeft: "10px" }}
          icon={<KeyboardArrowRightIcon />}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {diasDeLaSemana.map((dia) => (
          <div
            key={dia.toString()}
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {/* Inicial del día de la semana */}
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              {format(dia, "iii", { locale: es }).charAt(0).toUpperCase()}
            </div>

            {/* Número del día */}
            <div
              style={{
                padding: "10px",
                textAlign: "center",
                width: "40px",
                backgroundColor: isToday(dia)
                  ? "rgba(130, 92, 255)"
                  : "transparent",
                color: isToday(dia) ? "white" : "black",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              {format(dia, "d", { locale: es })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendario;
