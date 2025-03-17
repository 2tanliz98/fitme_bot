import React, { useState } from "react";
import {
  format,
  startOfWeek,
  addWeeks,
  subWeeks,
  isToday,
  eachDayOfInterval,
} from "date-fns";
import { es } from "date-fns/locale"; // Importar locale en español

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { BottomNavigationAction } from "@mui/material";

const Calendario: React.FC = () => {
  // Fecha actual
  const today = new Date();

  // Estado para la semana actual (usaremos el inicio de la semana como punto de referencia)
    const [currentWeek, setCurrentWeek] = useState<Date>(() =>
      startOfWeek(today, { weekStartsOn: 0 })
    );


  // Función para obtener los días de la semana
  const getWeekDays = (startOfWeekDate: Date) => {
    return eachDayOfInterval({
      start: startOfWeekDate,
      end: addWeeks(startOfWeekDate, 1),
    }).slice(0, 7);
  };

  // Obtener los días de la semana actual
  const weekDays = getWeekDays(currentWeek);

  // Cambiar entre semanas
  const goToNextWeek = () => {
    setCurrentWeek((prev) => addWeeks(prev, 1));
  };

  const goToPreviousWeek = () => {
    setCurrentWeek((prev) => subWeeks(prev, 1));
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
          onClick={goToPreviousWeek}
          style={{ marginRight: "10px" }}
          icon={<KeyboardArrowLeftIcon />}
        ></BottomNavigationAction>
        <h4>{format(currentWeek, "MMMM yyyy", { locale: es })} </h4>
        <BottomNavigationAction
          onClick={goToNextWeek}
          style={{ marginLeft: "10px" }}
          icon={<KeyboardArrowRightIcon />}
        ></BottomNavigationAction>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {weekDays.map((day) => (
          <div
            key={day.toString()}
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {/* Mostrar la inicial del día de la semana */}
            <div
              style={{
                fontSize: "14px", // Tamaño de la inicial
                fontWeight: "bold", // Negrita para la inicial
                color: "black",
              }}
            >
              {format(day, "iii", { locale: es }).charAt(0).toUpperCase()}{" "}
              {/* Primer letra del día */}
            </div>
            {/* Mostrar el número del día */}

            <div
              key={day.toString()}
              style={{
                padding: "10px",
                textAlign: "center",
                width: "40px",
                backgroundColor: isToday(day)
                  ? "rgba(130, 92, 255)"
                  : "transparent",
                color: isToday(day) ? "white" : "black",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              {format(day, "d", { locale: es })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendario;
