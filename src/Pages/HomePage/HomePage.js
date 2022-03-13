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
// import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { blue, red } from '@mui/material/colors';
// import Background from '../images/background_image.png';

const footers = [
  {
    title: 'Company',
    description: ['Team'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  return (
      

   
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } } } />
      <CssBaseline />
      <div 
        style={{  
          backgroundImage: "url(" + require("./749813.jpg") + ")",
          height: '100%',

        }}
      >
        {/* <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        // style={{ background: '#06F4F8' }}
      > */}
        <Toolbar sx={{ flexWrap: 'wrap' }}    >
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            
          </Typography>
          <nav  >
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Tool1
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Tool2
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              href="http://localhost:3001/route/PatientPortal"
            >
              Tool3
            </Link>
          </nav>
          <Button href="http://localhost:3001/route/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      {/* </AppBar> */}
      {/* Hero unit */}

   


      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}   >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          eHealth
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
         eHealth comes with multiple options of storing your all your health data at one place to various 
         AI based tools to access your healthh conditions both mental and physical
        </Typography>
      </Container>
      {/* End hero unit */}
       {/* <Container maxWidth="md" component="main"    > 
        { <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              {/* <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                //   action={tier.title === 'Pro' ? <StarIcon /> : null}
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
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card> */}
            {/* </Grid>
          ))}
        </Grid>}
     </Container>  */} 
     {/* {*Footer */}
      <Container
        maxWidth="md"
        component="footer"
        // style={{ background: '#2E3B55' }}
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 30,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
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
          ))}
        </Grid>
        
      </Container>
      {/* End footer */}
      </div>
    </React.Fragment>
    
  );
}

export default function Pricing() {
  return <PricingContent />;
}