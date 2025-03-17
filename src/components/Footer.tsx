import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Footer: React.FC = () => {
  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      showLabels
    >
      <BottomNavigationAction label="Mi Plan" icon={<FitnessCenterIcon />} />
      <BottomNavigationAction label="Estadísticas" icon={<InsertChartIcon />} />
      <BottomNavigationAction label="Configuración" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
