import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { useSelector } from "react-redux";
import Navbar from './components/Navbar/Navbar'
import RegistrationForm from "./components/Users/register";
import LoginForm from "./components/Users/login";
import HeroSection from "./components/Homepage/Homepage";
import Resume from "./components/Users/Resume";


function App() {
  const user = useSelector((state) => state?.auth?.user);

  return (
    <BrowserRouter>
    <Navbar username={user?.username} />
    <Routes>
      <Route path="/" element={<HeroSection username={user?.username}/>} />
    <Route path="/register" element={<RegistrationForm />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/resume" element={<Resume></Resume>}></Route>
    
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
