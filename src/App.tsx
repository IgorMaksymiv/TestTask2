import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Array } from './components/Array/Array';
import CardPage from './pages/CardPage/CardPage';
import About from './pages/About/About';
import Investment from './pages/Investment/Investment';
import News from './pages/News/News';
import Analytics from './pages/Analytics/Analytics';
import Digest from './pages/Digest/Digest';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Header />
                                <Main Array={Array} />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/investment" element={<Investment />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/digest" element={<Digest />} />
                    <Route path="/card/:id" element={<CardPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
