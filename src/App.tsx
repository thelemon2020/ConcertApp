import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ConcertForm from './components/ConcertForm';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
    </div>
  );
}

export default App;
