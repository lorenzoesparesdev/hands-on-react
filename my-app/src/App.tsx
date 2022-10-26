import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import HelloClassComponent from './HelloClassComponent';

function App() {
  return (
    // <Hello name="David" enthusiasmLevel={5}/>
    <HelloClassComponent name="David" enthusiasmLevel={5}/>
  );
}

export default App;
