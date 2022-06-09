import { Container, Typography } from "@mui/material";
import "./App.css";
import { Form } from "./shared/components/form/Form";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" fontWeight={600} color={"green"}>
        Crea la tua fattura
      </Typography>
      <Form />
    </Container>
  );
}

export default App;
