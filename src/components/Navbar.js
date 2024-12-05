import React from 'react';
import { Link } from 'react-router-dom';
import { useKeranjang } from '../context/KeranjangContext';

function Navbar() {
  const { keranjang } = useKeranjang();

  // Hitung total item di keranjang
  const totalItem = keranjang.reduce((total, item) => total + item.jumlah, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Korean Spicy</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/keranjang">
                Keranjang 
                {totalItem > 0 && (
                  <span className="badge badge-danger ml-1">
                    {totalItem}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;