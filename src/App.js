import './App.css';
import Header from './Component/navbar/mainNav'
import Userinfo from './Component/HeaderBar/userInfo'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Userinfo/>
    </div>
  );
}

export default App;
