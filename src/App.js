import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import Home from "./pages/frontend/Home"
import About from "./pages/frontend/About"
import Contact from "./pages/frontend/Contact"
import Login from './pages/Login'
import Layout from './pages/frontend/Layout';
import NoPage from './pages/NoPage';
import Counter from './pages/frontend/Counter';

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route index="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="counter" element={<Counter />} />
                        <Route path='login' element={<Login />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>

            {/* <Header />
            <Home />
            <Login />
            <Footer /> */}
        </div>
    )
}
