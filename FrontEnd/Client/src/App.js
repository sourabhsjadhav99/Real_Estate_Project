import React from 'react'
import { Routes, Route } from "react-router-dom";
import Error from './componentss/Error';
import FormPage from './componentss/Multistep_Form/FormPage';
import View from './componentss/Multistep_Form/View';
import DisplayData from './componentss/Searchbar_Table/DisplayData';

import SignIn from "./componentss/SignIn_SignUp/SignIn"
import SignUp from "./componentss/SignIn_SignUp/SignUp"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/display" element={<DisplayData />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/view/:ppdId" element={<View />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>


  )
}

export default App
