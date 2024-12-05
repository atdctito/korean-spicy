import React, { useState } from 'react';
import { useKeranjang } from '../context/KeranjangContext';
import WAModal from '../components/WAModal';

function Keranjang() {
  const { keranjang, ubahJumlah, hapusDariKeranjang } = useKeranjang();
  const [modalOpen, setModalOpen] = useState(false);

  const totalHarga = keranjang.reduce(
    (total, item) => total + (item.harga * item.jumlah),
    0
  );

  const bukaModal = () => {
    setModalOpen(true);
  };

  const tutupModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Keranjang Belanja</h2>
      {keranjang.length === 0 ? (
        <div className="alert alert-info text-center">
          Keranjang Anda kosong. Silakan pilih menu terlebih dahulu.
        </div>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nama Menu</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Total</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {keranjang.map((item) => (
                <tr key={item.id}>
                  <td>{item.nama}</td>
                  <td>Rp {item.harga.toLocaleString()}</td>
                  <td>
                    <div className="input-group">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => ubahJumlah(item.id, item.jumlah - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="text" 
                        className="form-control text-center" 
                        value={item.jumlah}
                        readOnly
                      />
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => ubahJumlah(item.id, item.jumlah + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>Rp {(item.harga * item.jumlah).toLocaleString()}</td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => hapusDariKeranjang(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-right">
                  <strong>Total Harga:</strong>
                </td>
                <td>
                  <strong>Rp {totalHarga.toLocaleString()}</strong>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Ringkasan Pesanan</h5>
                  <ul className="list-group list-group-flush">
                    {keranjang.map((item) => (
                      <li 
                        key={item.id} 
                        className="list-group-item d-flex justify-content-between"
                      >
                        <span>{item.nama} x {item.jumlah}</span>
                        <span>Rp {(item.harga * item.jumlah).toLocaleString()}</span>
                      </li>
                    ))}
                    <li className="list-group-item bg-light">
                      <strong>Total: Rp {totalHarga.toLocaleString()}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <button 
                className="btn btn-success btn-lg btn-block"
                onClick={bukaModal}
                disabled={keranjang.length === 0}
              >
                Lanjutkan ke Pembayaran
              </button>
            </div>
          </div>
        </>
      )}

      {/* Modal WhatsApp */}
      {keranjang.length > 0 && (
        <WAModal 
          keranjang={keranjang}
          isOpen={modalOpen}
          onClose={tutupModal}
        />
      )}
    </div>
  );
}

export default Keranjang;