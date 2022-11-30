import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import './index.css';
 
import React from 'react';
import MainCategory from './components/MainCategory';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Items from './components/Items';
import MainItems from './components/MainItems';
import TopSelling from './components/TopSelling';

 function App() {
 return (
       <>          
          <Nav />  
          <Banner/>       
          
          <MainCategory/> 
          <MainItems/>
          <Items/>
          <TopSelling/>
          <Footer/>
       </>
 )
 }

export default App;






