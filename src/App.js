import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import NoteState from "./context/notes/noteState";
import { useState } from "react";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(0)


  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  return (
    <div>
      <NoteState>
        <Router>
        <LoadingBar
        color='#f17126'
        height={3}
        progress={progress}
        loaderSpeed={1000}
        onLoaderFinished={() => setProgress(0)}
      />
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login"  element={<Login setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/signup"   element={<Signup setProgress={setProgress} showAlert={showAlert}/>} />
            </Routes>
          </div>
          <Footer/>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
