// import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Email from "./components/Email";
import Links from "./components/Links";
import Home from "./pages/Home";
function App() {
  return (
    <div className="text-black grid-cols-10 bg-blue-900">
      <Navbar />
      <div className="self-center justify-self-auto grid-col-span-6">
        <Home />
      </div>
      <Links />
      <Email />
    </div>
  );
}

export default App;
