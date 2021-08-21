import React from 'react';
import NavBar from './components/NavBar';
import FooterPage from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
//import'bootstrap-css-only/css/bootstrap.min.css'; 
//import'mdbreact/dist/css/mdb.css';

//new




function App() {
  return (
   <>
    <Router>
         <NavBar/>
         <FooterPage/>
        
       
    
    <Switch>
      <Route path='/' exact />
    </Switch>
     
    </Router>
   </>
  );
}

export default App;
