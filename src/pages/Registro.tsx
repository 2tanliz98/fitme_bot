import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";

const App = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    correo: "",
    telefono:"",
    peso:"",
    cintura:"",
    cadera:"",
    altura:"",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          p: 3,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <h1>
          Registro
        </h1>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Edad"
            variant="outlined"
            fullWidth
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Correo"
            variant="outlined"
            fullWidth
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Peso"
            variant="outlined"
            fullWidth
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Cintura"
            variant="outlined"
            fullWidth
            name="cintura"
            value={formData.cintura}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Cadera"
            variant="outlined"
            fullWidth
            name="cadera"
            value={formData.cadera}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Altura"
            variant="outlined"
            fullWidth
            name="altura"
            value={formData.altura}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#5F41E4",
              "&:hover": { backgroundColor: "#4e33c5" },
              "&:focus": {
                outline: "none", 
              },
               padding: '10px',
            }}
          >
            Enviar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default App;
