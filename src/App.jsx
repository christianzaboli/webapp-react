import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './context/DefaultContext';
import 'bootstrap/dist/css/bootstrap.css';

import DefaultLayout from './layout/DefaultLayout'
import HomePage from './Pages/HomePage'
import MovieDetail from './Pages/MovieDetail';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/movie/id' element={<MovieDetail/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
    
  )
}

export default App
