import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
