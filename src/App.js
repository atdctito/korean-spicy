import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { KeranjangProvider } from './context/KeranjangContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Keranjang from './pages/Keranjang';

function App() {
  return (
    <KeranjangProvider>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/keranjang" element={<Keranjang />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </KeranjangProvider>
  );
}

export default App;