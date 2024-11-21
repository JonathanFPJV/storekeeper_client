import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Storekeeper from "./pages/Storekeeper"; // Importa el componente Storekeeper

// Define un tema global para la app
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Storekeeper /> {/* Renderiza Storekeeper */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
