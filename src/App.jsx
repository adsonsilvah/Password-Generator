import './App.css'
import { Container, TextField, Grid, Slider, Stack,FormControl,
  RadioGroup,FormControlLabel, Radio, FormGroup,Checkbox, Fab,InputAdornment
} from '@mui/material'
import { AiFillCopy } from "react-icons/ai";

function App() {

  return (
    <div className="App">
      <h1>
        Gere uma senha forte
      </h1>

      <p>
        Use o gerador de senhas abaixo para gerar sua senha segura
      </p>

    <Grid container direction="row" justifyContent="center" alignItems="center">

      <TextField id="filled-basic"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AiFillCopy size={25}/>
          </InputAdornment>
        ),
      }}
      >
      </TextField>

      <Container className='containerConfig'>
        <h1>Personalize sua senha</h1>

        <Stack id='stack'>
          <Slider size='small'/>
        </Stack>

          <FormControl id='form'>
            <RadioGroup defaultValue="Fácil de pronunciar">
              <FormControlLabel value="Fácil de pronunciar" control={<Radio />} label="Fácil de pronunciar" />
              <FormControlLabel value="Fácil de ler" control={<Radio />} label="Fácil de ler" />
              <FormControlLabel value="Todos os caracteres" control={<Radio />} label="Todos os caracteres" />
            </RadioGroup>
          </FormControl>

          <FormGroup id='formGroup'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Letra maiúscula" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Letra minúscula" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Números" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Símbolos" />
          </FormGroup>
      </Container>

      <Fab variant="extended" id='bottom'>
        Gerar senha
      </Fab>
    </Grid>
      
    </div>
  )
}

export default App
