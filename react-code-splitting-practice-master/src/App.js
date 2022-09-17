import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import React,{ Suspense, useEffect,useState } from 'react';
// import AddBooks from './components/AddBook';
// import Manage from './components/Manage';
import AppBarDense from './components/Header';
import BookCard from './components/TaskCard';
import ManageCard from './components/manageCard';
import service from './services/service'
const AddBooks=React.lazy(()=>import("./components/AddBook"));
const Manage=React.lazy(()=>import("./components/Manage"));



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
      
      <Route path='/addbooks' element={<Suspense fallback={<div>Loading</div>}><AddBooks/></Suspense>}/>
      <Route path='/manage'element={<Suspense fallback={<div>Loading</div>}><Manage update={displayData} list={bookList}/></Suspense>}/>
      <Route path='/manage/:id'element={<ManageCard/>}/>


    </Routes>

    
    </BrowserRouter>
  )
}

export default App;
