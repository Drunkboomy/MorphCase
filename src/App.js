import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40';
      showAlert("DarkMode has been swithced on", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been swithced on", "success")
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar title="MorphCase" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          
        </div>
        <div className="container">
        <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Morph Your Text Here"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={
            <About 

            />
            } />
          </Routes>
          </div>
    
      </div>
    </Router>
  );
}

export default App;
