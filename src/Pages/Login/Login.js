import * as React from 'react';
//import Avatar from '@mui-ui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';



const theme = createTheme();


function Login(props) {

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(document.getElementById("LoginForm"));
      let api = 'http://localhost:3000/api/user/:';

      let temp = api + data.get('email')
      
      localStorage.setItem("email", data.get('email'))
     

      let res = await fetch(temp, {
        method: "GET"
      });
      let resJson = await res.json();
    
      
      if (!(resJson.length === 0)){
        let dbpassword = resJson[0].password;
        let dbpatientid = resJson[0].patient_id;
        localStorage.setItem("patientid", dbpatientid)
      if (res.status === 200) {


        if (data.get('password') === dbpassword) {
          
         
          window.location.href = 'https://e-hospital.ca/route/PatientPortal';
        }
        else {
          alert("invalid passoword")
        }
        

      } else {
        console.log("Some error occured in fetching api");
      }
    }
    else{
      alert("no record exists");
    }
    } catch (err) {
      console.log(err);
    }
  };


  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
          </Typography>
        </Toolbar>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
                 Sign in 
                  </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 1 }} id='LoginForm' >
            <Grid sx={{  width: 1  }} >
            <Grid >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
               
               </Grid>
               <Grid >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             </Grid>
             <Grid>
             
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            </Grid>
           <Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            // onClick={handleCick}
            >
              Sign In
            </Button>
            </Grid>
            <Grid item>
                <Link href="https://e-hospital.ca/route/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;

