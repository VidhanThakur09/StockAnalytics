import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from 'react-cookie';
function App() {


  return (<CookiesProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
