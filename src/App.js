import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from'./components/OAuth/Register';
//import Main from './components/Main/Main';


function App() {
  return (
    <div className='todo-app'>
      <Register />
    </div>
  );
}

export default App;
