import React from 'react';

import './App.css';
import Header from './componentes/header';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <>
      <header>
        <Router>
          <Header />
        </Router>
        
      </header>
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
