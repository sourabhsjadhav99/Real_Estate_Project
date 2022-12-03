import logo from './logo.svg';
import React, {useState} from "react"; 
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';

function App() {
  const [useInfo, setUseInfo] = useState({
    userId : '',
    userName : '',
    accessToken : ''
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/display" element={<Forms/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
