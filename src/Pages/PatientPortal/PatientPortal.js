import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
//import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';



const showLabResults = (event) => {
    event.preventDefault();
   console.log("button clicked");
   window.location.href='https://e-hospital.ca/route/LabResults';
  
   
    
  };
  
  const showDrugResults = (event) => {
    event.preventDefault();
  
   const savedemail = localStorage.getItem("email");
   console.log(savedemail);
   if (savedemail.toLowerCase().indexOf("provider") >= 0)
   {
    window.location.href='http://localhost:3002/route/MedResultsProvider';
   }
   else{
    window.location.href='http://localhost:3002/route/MedResultsPatient';
   }
  //  window.location.href='https://e-hospital.ca/route/MedResults';
  
    
  };

  const showDaigResults = (event) => {
    event.preventDefault();
   console.log("button clicked");
   window.location.href='https://e-hospital.ca/route/DiagResults';
    
  };

function PatientPortal() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        // style={{ background: '#06F4F8' }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }} >
          <Typography variant="h6" color="#4169E1" noWrap sx={{ flexGrow: 1 }} fontFamily="Bradley Hand" fontSize='2.8rem'>
            eHospital
          </Typography>
          {/* <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav> */}
          {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Patient Portal
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Access to all your health records just a click away!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
      <Grid container spacing={8} alignItems="flex-end">
  <Grid item md={4} key='medical' xs={12} sm={12} >
    <card>
      <CardHeader 
      title='Laboratory Results'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
      }}
      />
      <CardContent>
      <box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, }}>
       
        </box>
        <ul>
        <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        
                      >
                       All the laboratory results can be found here
                      </Typography>
        </ul>

      </CardContent>

      <CardActions>
      <Button fullWidth variant='contained' onClick={showLabResults}>
                    view
                  </Button>
      </CardActions>
    </card>
  </Grid>
  <Grid item md={4} key='Diagnosis'xs={12} sm={12} >
    <card>
    <CardHeader 
      title='Drugs History'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
      }}
      />
      <CardContent>
      <box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, }}>
          
        </box>
        <ul>
        <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        
                      >
                      All the drugs prescribed can be found here
                      </Typography>
        </ul>

      </CardContent>
      <CardActions>
      <Button fullWidth variant='contained' onClick={showDrugResults}>
                    view
                  </Button>
      </CardActions>
    </card>
  </Grid>
  <Grid item md={4}  key='LabRecords' xs={6} sm={6}>
  <card >
  <CardHeader 
      title='Diagnosis Results'
      titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
      }}
      />
      <CardContent>
        <box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, }}>
     
        </box>
        <ul>
        <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                      
                      >
                        The diagnosis results can be found here
                      </Typography>
        </ul>

      </CardContent>
      <CardActions>
      <Button fullWidth variant='contained' onClick={showDaigResults}>
                    view
                  </Button>
      </CardActions>
    </card>
  </Grid>
</Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {/* {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))} */}
        </Grid>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}



export default PatientPortal;