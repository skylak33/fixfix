// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import FirstPageComponent from './FirstPageComponent';
import SecondPageComponent from './SecondPageComponent';
import MyTable from './Table';
import ChatApp from './Chat';
import { Button, Container } from '@salutejs/plasma-ui';
import './App.css';
import UsrForm from './UserForm';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<FirstPageComponent />} /> 
        <Route exact path='/formpage' element={<SecondPageComponent />} />
        <Route exact path='/formpage:id' element={<SecondPageComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
