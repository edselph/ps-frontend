import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import styles from "../styles/Home.module.css";
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Navbar from '../components/navbar/navbar';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Container>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >


        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Link href="/profile" color="secondary">
          Go to the Profile page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
