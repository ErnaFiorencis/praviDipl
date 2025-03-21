import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login/Login";
import { Welcome } from "./pages/Welcome/Welcome";
import { Register } from './pages/Login/Register';
import './App.css';
import './fonts/pixelFont-sproutLands.ttf';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="praviDipl/" element={<Welcome />} />
                <Route path="praviDipl/login" element={<Login />} />
                <Route path="praviDipl/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
