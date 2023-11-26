// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from '@salutejs/plasma-web';
import FirstPageComponent from './FirstPageComponent';
import MyTable from './Table';
import ChatApp from './Chat';
import { Button, Container } from '@salutejs/plasma-ui';
import './App.css';
import UsrForm from './UserForm';


const SecondPage = () => {
    function FirstPageComponentLinkAccept() {
        window.location.href = "/";
        console.warn("1")
    }
    function FirstPageComponentLinkReject() {
      window.location.href = "/";
      console.warn("2")
  }
  return (
    
    <div>
        <div className="secondPage-container">
        <UsrForm />
        <ChatApp />
        </div>
        <div className="secondPage-container">
        <Button view='succes' onClick={FirstPageComponentLinkAccept}>Принять </Button>
        <Button view='error' onClick={FirstPageComponentLinkReject}>Отклонить </Button>
        </div>
    </div>
    
  );
};

export default SecondPage;
