import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { contextProvider } from './context/DefaultContext';
import 'bootstrap/dist/css/bootstrap.css';

import DefaultLayout from './layout/DefaultLayout'
import HomePage from './Pages/HomePage'
import MovieDetail from './Pages/MovieDetail';

function App() {

  return (
    <contextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/movie/id' element={<MovieDetail/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </contextProvider>
    
  )
}

export default App
