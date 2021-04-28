import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Email from './components/Email';
function App() {
  return (
    <div className="text-black flex">
      <Navbar />
      <Email />
    </div>
  );
}

export default App;
