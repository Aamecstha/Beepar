import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart'
import GamePage from './pages/GamePage'
import Home from './pages/Home'
import Store from './pages/Store'
import UploadItem from './pages/UploadItem'

const UrlPatterns = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/gameZone" element={<GamePage/>}/>
                <Route path="/upload" element={<UploadItem/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </Router>
    )
}

export default UrlPatterns
