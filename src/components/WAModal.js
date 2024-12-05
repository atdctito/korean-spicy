import React, { useState } from 'react';

function WAModal({ keranjang, isOpen, onClose }) {
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [catatan, setCatatan] = useState('');

  // Hitung total harga
  const totalHarga = keranjang.reduce(
    (total, item) => total + (item.harga * item.jumlah),
    0
  );

  const kirimPesanWhatsApp = () => {
    // Validasi input
    if (!nama || !telepon) {
      alert('Nama dan Telepon harus diisi');
      return;
    }

    // Buat detail pesanan
    const detailPesanan = keranjang.map(item => 
      `- ${item.nama} (${item.jumlah} x Rp ${item.harga.toLocaleString()}) = Rp ${(item.harga * item.jumlah).toLocaleString()}`
    ).join('\n');

    // Format pesan lengkap
    const pesanWA = `Halo Korean Spicy! 🍣

Saya ingin melakukan pemesanan:

DATA PEMESAN:
Nama: ${nama}
No. WhatsApp: ${telepon}

DETAIL PESANAN:
${detailPesanan}

TOTAL PEMBAYARAN:
Rp ${totalHarga.toLocaleString()}

lokasi pengantaran:
${catatan || '-'}

Terima kasih! 🙏`;
    
    // Nomor WhatsApp (ganti dengan nomor restoran Anda)
    const nomorWA = '081511184500';
    
    // Buat link WhatsApp
    const waLink = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesanWA)}`;
    
    // Buka WhatsApp
    window.open(waLink, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Konfirmasi Pesanan</h5>
            <button 
              type="button" 
              className="close" 
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            {/* Detail Pesanan */}
            <div className="mb-3">
              <h6>Ringkasan Pesanan:</h6>
              <table className="table table-sm">
                <tbody>
                  {keranjang.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nama}</td>
                      <td>{item.jumlah} x</td>
                      <td>Rp {(item.harga * item.jumlah).toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="table-active">
                    <td colSpan="2"><strong>Total</strong></td>
                    <td><strong>Rp {totalHarga.toLocaleString()}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Form Kontak */}
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input 
                type="text" 
                className="form-control"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div className="form-group">
              <label>Nomor WhatsApp</label>
              <input 
                type="tel" 
                className="form-control"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
                placeholder="Contoh: 081234567890"
                required
              />
            </div>
            <div className="form-group">
              <label>lokasi pengantaran</label>
              <textarea 
                className="form-control"
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Tulis lokasi cod/pengantaran makanan"
                rows="3"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onClose}
            >
              Batal
            </button>
            <button 
              type="button" 
              className="btn btn-success" 
              onClick={kirimPesanWhatsApp}
            >
              Kirim Pesanan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WAModal;