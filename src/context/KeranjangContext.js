import React, { createContext, useState, useContext } from 'react';

// Buat Context
const KeranjangContext = createContext();

// Provider Component
export function KeranjangProvider({ children }) {
  const [keranjang, setKeranjang] = useState([]);

  // Fungsi untuk menambah item ke keranjang
  const tambahKeKeranjang = (menu) => {
    // Cek apakah item sudah ada di keranjang
    const itemExist = keranjang.find(item => item.id === menu.id);

    if (itemExist) {
      // Jika item sudah ada, naikkan jumlahnya
      setKeranjang(keranjang.map(item => 
        item.id === menu.id 
          ? {...item, jumlah: item.jumlah + 1}
          : item
      ));
    } else {
      // Jika item baru, tambahkan dengan jumlah 1
      setKeranjang([...keranjang, {...menu, jumlah: 1}]);
    }
  };

  // Fungsi untuk menghapus item dari keranjang
  const hapusDariKeranjang = (menuId) => {
    setKeranjang(keranjang.filter(item => item.id !== menuId));
  };

  // Fungsi untuk mengubah jumlah item
  const ubahJumlah = (menuId, jumlah) => {
    if (jumlah === 0) {
      hapusDariKeranjang(menuId);
    } else {
      setKeranjang(keranjang.map(item => 
        item.id === menuId 
          ? {...item, jumlah: jumlah}
          : item
      ));
    }
  };

  return (
    <KeranjangContext.Provider 
      value={{ 
        keranjang, 
        tambahKeKeranjang, 
        hapusDariKeranjang, 
        ubahJumlah 
      }}
    >
      {children}
    </KeranjangContext.Provider>
  );
}

// Custom hook untuk menggunakan context
export function useKeranjang() {
  return useContext(KeranjangContext);
}