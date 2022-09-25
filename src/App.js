import './App.css';
import Header from "./components/Header";
import Logos from "./components/Logos";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return (
        /*<div>
            <Header/>
            <Logos/>
            <Login/>
            <Register/>
        </div>*/
        <BrowserRouter>
            <Header/>
            <Logos/>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route exact path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
