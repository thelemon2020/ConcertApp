import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ConcertForm from './components/ConcertForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ConcertForm></ConcertForm>
    </div>
  );
}

export default App;
