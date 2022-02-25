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
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import MedTable from '../MedResults/MedResults'
import Link from '@mui/material/Link';



const theme = createTheme();

 
function Login(props) {

    let handleSubmit = async (e) => {
        e.preventDefault();
        try { 
          const data= new FormData(document.getElementById("LoginForm"));
          let api = 'http://localhost:3000/api/user/:' ;
          
          let temp = api + data.get('email')
          console.log(temp)
          let res = await fetch(temp, {
            method: "GET"
          });
          let resJson = await res.json();
          let dbpassword = resJson[0].password;
          // console.log(dbpassword);
  
          if (res.status === 200) {
            
              
          if(data.get('password') === dbpassword) {
              console.log(dbpassword)
              window.location.href='http://localhost:3001/route/PatientPortal';
              }
                  else{
                    alert("invalid passoword")
                  }

          } else {
           console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };


  // const handleSubmit = (event) => {
  //   event.preventDefault();    
  //   console.log("form clicked");
  //   console.log(event)
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  //   if(data.get('email') === 'rudr')
  //   {
  //     console.log("oh balle")
  //     //window.location.href='http://localhost:3001/route/PatientPortal';
  //   }
  //   else{
  //     alert("invalid passoword")
  //   }
  // };

  // const handleCick = (event) => {
  //   event.preventDefault();
  //  console.log("button clicked");
  //  window.location.href='http://localhost:3000/route/PatientPortal';
    
  // };


    // const history = useNavigate();
    // const handleCick = () => history('http://localhost:3000/route/PatientPortal');//eg.history.push('/login');



  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHealth
          </Typography>
          </Toolbar>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
            
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
         
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} id = 'LoginForm' >
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={handleCick}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="http://localhost:3001/route/SignUp" variant="body2">
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

