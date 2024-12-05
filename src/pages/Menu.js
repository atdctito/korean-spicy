import React, { useState } from 'react';
import { useKeranjang } from '../context/KeranjangContext';

function Menu() {
  const { tambahKeKeranjang } = useKeranjang();
  const [menu] = useState([
    {
      id: 1,
      nama: 'Keju Chicken Roll',
      harga: 5000,
      deskripsi: 'Roll keju dengan rasa yang gurih',
      gambar: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      nama: 'nori Spicy Roll',
      harga: 5000,
      deskripsi: 'Roll nori dengan rasa yang renyah',
      gambar: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      nama: 'crab stick Spicy Roll',
      harga: 5000,
      deskripsi: 'Roll crab stick',
      gambar: 'https://via.placeholder.com/300'
    }
  ]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Menu Korean Spicy</h2>
      <div className="row">
        {menu.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={item.gambar} 
                className="card-img-top" 
                alt={item.nama} 
                style={{ 
                  height: '250px', 
                  objectFit: 'cover' 
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.nama}</h5>
                <p className="card-text flex-grow-1">{item.deskripsi}</p>
                <div className="mt-auto">
                  <p className="card-text mb-3">
                    <strong>Rp {item.harga.toLocaleString()}</strong>
                  </p>
                  <button 
                    className="btn btn-success btn-block"
                    onClick={() => tambahKeKeranjang(item)}
                  >
                    + Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;