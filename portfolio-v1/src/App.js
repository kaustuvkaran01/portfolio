import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App bg-gray-200">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
