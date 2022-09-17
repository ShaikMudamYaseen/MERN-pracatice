import logo from './logo.svg';
import './App.css';

import ResponsiveAppBar from './components/AppBar';
import Card1 from './components/card';
import { Box } from '@mui/material';
import Content from './components/Containt';
import Footer from './components/footer';


function App() {
  return (
    <Box sx={{margin:"30px"}}>
      <ResponsiveAppBar/>
      <Box sx={{display:"flex",justifyContent:'space-around',marginBottom:"50px",flexWrap:"wrap"}}>
      <Card1/>
      <Card1/>

      </Box>
      <Content/>
      <Footer/>

    </Box>
  );
}

export default App;
