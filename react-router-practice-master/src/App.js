import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import AddBooks from './components/AddBook';
import Manage from './components/Manage';
import AppBarDense from './components/Header';
import BookCard from './components/TaskCard';
import ManageCard from './components/manageCard';
import service from './services/service'
import { useEffect,useState } from 'react';


function App() {
  const [bookList, setBookList] = useState([]);
  const displayData = () => {
    service.getData().then((res) => {
      setBookList(res.data);
    });
  };
  useEffect(() => {
    displayData();
  }, []);
  return (
    <BrowserRouter>
    <AppBarDense/>
    <Routes>
      <Route path='/' element={<Home list={bookList} update={displayData}/>}/>
      <Route path='/addbooks' element={<AddBooks/>}/>
      <Route path='/manage'element={<Manage update={displayData} list={bookList}/>}/>
      <Route path='/manage/:id'element={<ManageCard/>}/>


    </Routes>

    
    </BrowserRouter>
  )
}

export default App;
