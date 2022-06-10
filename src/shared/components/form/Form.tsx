import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FC, useState } from "react";
import { useInvoice } from "../../hooks/useInvoice";
import "./Form.css";

export const Form: FC = () => {
  const { createInvoice, errors, isLoading } = useInvoice();
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Container>
      <Box mt={8}>
        <form
          onSubmit={(event) => {
            const data = new FormData(event.currentTarget);
            event.preventDefault();
            createInvoice(data.get("company"), {
              invoiceNum: data.get("invoiceNum")?.toString(),
              currentMonth: data.get("currentMonth")?.toString(),
              date: data.get("date")?.toString(),
              netAmount: Number(data.get("netAmount")),
            });
          }}
        >
          <Grid container spacing={4} columns={1} rowSpacing={10}>
            <Grid container item spacing={3}>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Azienda
                  </InputLabel>
                  <Select
                    defaultValue="Apophis_Contacts"
                    id="demo-simple-select-outlined"
                    name="company"
                    label="Azienda"
                  >
                    <MenuItem value="Apophis_Contacts">
                      Apophis_Contacts
                    </MenuItem>
                    <MenuItem value="Digital_Center">Digital_Center</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="invoiceNum"
                  label="Codice fattura"
                  type="text"
                  placeholder="Inserisci codice"
                  error={!!errors.invoiceNum}
                  helperText={errors.invoiceNum}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Data compilazione"
                    InputProps={{ name: "date" }}
                    value={date}
                    onChange={(value) => setDate(value ?? new Date())}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Mese
                  </InputLabel>
                  <Select
                    id="demo-simple-select-outlined"
                    name="currentMonth"
                    label="Mese"
                    defaultValue="Gennaio"
                  >
                    <MenuItem value="Gennaio">Gennaio</MenuItem>
                    <MenuItem value="Febbraio">Febbraio</MenuItem>
                    <MenuItem value="Marzo">Marzo</MenuItem>
                    <MenuItem value="Aprile">Aprile</MenuItem>
                    <MenuItem value="Maggio">Maggio</MenuItem>
                    <MenuItem value="Giugno">Giugno</MenuItem>
                    <MenuItem value="Luglio">Luglio</MenuItem>
                    <MenuItem value="Agosto">Agosto</MenuItem>
                    <MenuItem value="Settembre">Settembre</MenuItem>
                    <MenuItem value="Ottobre">Ottobre</MenuItem>
                    <MenuItem value="Novembre">Novembre</MenuItem>
                    <MenuItem value="Dicembre">Dicembre</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="netAmount"
                  label="Compenso netto"
                  type="number"
                  inputProps={{ inputMode: "numeric" }}
                  placeholder="Inserisci compenso"
                  error={!!errors.netAmount}
                  helperText={errors.netAmount}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              {isLoading ? (
                <LoadingButton loading variant="outlined" />
              ) : (
                <Button
                  variant="outlined"
                  formAction="submit"
                  type="submit"
                  fullWidth
                  size="large"
                  color="success"
                >
                  Scarica fattura
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
