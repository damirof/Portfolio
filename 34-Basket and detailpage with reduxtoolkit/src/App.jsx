import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/nabar/Navbar';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';


const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    <Footer/>
    </div>
  );
};

export default App;
