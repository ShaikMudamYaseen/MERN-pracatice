import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ShowPlayer from './components/ShowPlayer';
import AddPlayer from './components/AddPlayer';
import Header from './components/Header';
import AppBarDense from './components/Header';
import { useEffect,useState } from 'react';
import services from './services/service'
import {PlayerContext} from './context/context'



function App() {
  const [players,setPlayers]=useState([])
     
        useEffect(()=>{
            services.getData().then(res=>setPlayers(res.data))
            
        });
  return (
    // <Header/>

    <BrowserRouter>
    {/* <Header/> */}
    <AppBarDense/>
    <Routes>
   
    <Route path='/' element={ <PlayerContext.Provider value={[players,setPlayers]}><ShowPlayer/></PlayerContext.Provider>}/>
      <Route path='/showPlayer' element={ <PlayerContext.Provider value={[players,setPlayers]}><ShowPlayer/></PlayerContext.Provider>}/>
    

      <Route path='/addplayer' element={<AddPlayer/>}/>
    </Routes>

    
    </BrowserRouter>
    
  );
}

export default App;
