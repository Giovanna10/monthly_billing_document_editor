import { CssBaseline } from "@material-ui/core";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form } from "./shared/components/form/Form";
import logo from "./shared/assets/billing_icon.png";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00796b",
      },
      secondary: {
        main: "#448aff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="static" color="secondary">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} alt="Billing" width={40} height={40} />
            </IconButton> */}
            <Avatar
              sx={{ bgcolor: "blue", mr: 2 }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              D
            </Avatar>
            <Typography
              variant="h6"
              component="div"
              sx={{ alignItems: "center" }}
              color="whitesmoke"
            >
              Crea la tua fattura
            </Typography>
          </Toolbar>
        </AppBar>
        <Form />
      </Box>
    </ThemeProvider>
  );
}

export default App;
