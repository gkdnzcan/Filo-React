import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router'dan useNavigate import ediyoruz
import './Home.css'; // CSS dosyasını import ediyoruz

function Home() {
  const navigate = useNavigate(); // useNavigate hook'unu kullanarak yönlendirme fonksiyonu oluşturuyoruz

  const handleLoginClick = () => {
    navigate('/login'); // Login sayfasına yönlendir
  };

  return (
    <div className="home-container">
      <img src="/images/logo.png" alt="" />
      <button className="login-btn" onClick={handleLoginClick}>Giriş Yap</button>

      <div className="card-container">
        <div className="card">
          <h3>Fleetings</h3>
          <p>Filo Yönetim Sistemi</p>
        </div>
        <div className="card">
          <h3>IoT Çözümleri</h3>
          <p>Akıllı cihaz entegrasyonu</p>
        </div>
        <div className="card">
          <h3>Araç Takip</h3>
          <p>Mobiliz Araç Takip Ürünleri</p>
        </div>
      </div>
    </div>
  );
}

export default Home;