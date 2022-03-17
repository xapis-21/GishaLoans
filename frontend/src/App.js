import React from "react";
import { 
  Routes,
  Route,
  Link
} from 'react-router-dom'
import AddClient from "./container/AddClient";
import Home from "./container/Home";
import Header from './components/Header'
import LoneeInfo from "./container/LoneeInfo";


function App() {
  return (
          <div className="mx-auto w-full h-full">
            <Header/>
            <Routes>
              <Route element={<Home/>} path={'/'}/>
              <Route element={<AddClient/>} path={'/add_loan_client'}/>
              {/* <Route element={<LoneeInfo/>} path={'/client/:slug'}/> */}
            </Routes>
          </div>
      )
 
}

export default App;
