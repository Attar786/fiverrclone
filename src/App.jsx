

import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

function App() {
  
  
  return(
    <BrowserRouter>
          <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  ) 
}

export default App
