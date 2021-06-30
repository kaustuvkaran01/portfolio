import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Switch>
          <Route exact path="/" component={Home}/>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
