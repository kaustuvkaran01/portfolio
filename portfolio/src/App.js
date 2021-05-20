// import logo from "./logo.svg";
import "./App.css";
// import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


import Navbar from "./components/Navbar";
import Email from "./components/Email";
import Links from "./components/Links";
import Home from "./pages/Home";

function App() {
  return (
    // <Router>

    <div className="text-black grid-cols-10 bg-black">
      <Navbar />
      <div className="self-center justify-self-auto grid-col-span-6">
        <Home />
      </div>
      <Links />
      <Email />

    </div>
    // </Router>
  );
}

export default App;