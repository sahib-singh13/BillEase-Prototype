import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Intro } from './components/Intro';
import { UserType } from './Pages/UserType';
import Footer from './components/Footer';
import CustomerPage from './Pages/CustomerPage';
import Contact from './Pages/Contact';
import RetailerPage from './Pages/RetailerPage';
import Header from './components/Header';
import RegisterPage from './Pages/RegisterPage';
import DashBoard from './Pages/DashBoard';
import DashboardHeader from './components/DashboardHeader';
import About from './Pages/About';

const App = () => {
    const [showSplash, setShowSplash] = useState(true);
    const location = useLocation();

    // Splash screen logic
    useEffect(() => {
        const hasSeenSplash = localStorage.getItem('hasSeenSplash');
        
        if (!hasSeenSplash) {
            const timer = setTimeout(() => {
                setShowSplash(false);
                localStorage.setItem('hasSeenSplash', 'true');
            }, 3000);
            
            return () => clearTimeout(timer);
        } else {
            setShowSplash(false);
        }
    }, []);

    // Dashboard loading state
    const [isDashboardLoading, setIsDashboardLoading] = useState(false);
    useEffect(() => {
        if (location.pathname === '/dashboard') {
            setIsDashboardLoading(true);
            setTimeout(() => setIsDashboardLoading(false), 0);
        }
    }, [location.pathname]);

    if (showSplash) {
        return <Intro />;
    }

    return (
        <div className="app">
            {location.pathname === '/dashboard' && !isDashboardLoading ? (
                <DashboardHeader />
            ) : (
                <Header />
            )}

            <Routes>
                <Route path="/" element={<UserType />} />
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/retailer" element={<RetailerPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/about" element={<About/>} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;