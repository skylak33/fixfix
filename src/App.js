// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from '@salutejs/plasma-web';
import FirstPageComponent from './FirstPageComponent';
import SecondPageComponent from './SecondPageComponent';
import MyTable from './Table';
import ChatApp from './Chat';
import { Button, Container } from '@salutejs/plasma-ui';
import './App.css';
import UsrForm from './UserForm';


const App = () => {

  return (
    
    <FirstPageComponent/>
  );
};

export default App;
