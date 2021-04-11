
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Landing from "./Components/Layout/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
