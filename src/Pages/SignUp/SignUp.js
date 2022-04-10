import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';



const theme = createTheme();

function SignUp(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    try {

      const data = new FormData(event.currentTarget);
      const value = Object.fromEntries(data.entries());
      console.log(value);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)
      };
      const response = fetch('http://localhost:3000/api/createUser', requestOptions)
        .then((response) => {
          if(!response.ok) throw new Error(response.status);
          else window.location.href='https://e-hospital.ca/route/Login' ;
        })
        console.log('response is ' + JSON. stringify(response));
        
      //  if (response.status == 20)
          // window.location.href='http://localhost:3000/route/Login';
        

    } catch (err) {
      console.log(err);
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Toolbar sx={{ flexWrap: 'wrap' }}>

          <Typography  color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
            </Typography>
           
        </Toolbar>
        <Typography component="h6" variant="h8">
            Sign up
          </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 1
          }}
        >
      
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -1 , marginBottom: 100 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="first-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="FirstName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="LastName"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="MailAddress"
                  label="MailAddress"
                  name="MailAddress"
                  autoComplete="Mail Address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="DateofBirth"
                  label="DateofBirth"
                  type="Date"
                  defaultValue="2000-01-01"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Gender"
                  label="Gender"
                  type="Gender"
                  id="Gender"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="BloodGroup"
                  label="BloodGroup"
                  type="BloodGroup"
                  id="Blood Group"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Contactinfo"
                  label="Contactinfo"
                  type="email"
                  id="Contact info"
                  autoComplete="emailaddress"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Emergencycontact"
                  label="Emergencycontact"
                  type="email"
                  id="Emergencycontact"
                  autoComplete="Emergencycontact"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Familydoctor"
                  label="Familydoctor"
                  type="email"
                  id="Family doctor"
                  autoComplete="Familydoctor"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              Sign Up
            </Button>
            <Link href="https://e-hospital.ca/route/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
            </Grid>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              Sign Up
            </Button> */}
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="https://e-hospital.ca/route/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>

    </ThemeProvider>
  );
}
export default SignUp;