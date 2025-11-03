import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import DefaultLayout from './layout/DefaultLayout'
import HomePage from './Pages/HomePage'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<HomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
