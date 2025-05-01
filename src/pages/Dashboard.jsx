import React, { useState } from "react";
import data from "../data/vehicles.json"; // JSON dosyasını içe aktar
import "./Dashboard.css";

function Dashboard() {
  const [selectedFleet, setSelectedFleet] = useState(""); // Seçilen filo
  const [showList, setShowList] = useState(false);

  const toggleView = () => {
    setShowList(!showList);
  };

  // Seçilen filoya ait araçları almak
  const getVehiclesForSelectedFleet = () => {
    if (!selectedFleet) return [];
    const fleetData = Object.values(data).find((f) =>
      f.username.includes(selectedFleet)
    );
    return fleetData ? fleetData.vehicles : [];
  };

  return (
    <div className="dashboard-page">
      <div className="top-bar">
        <div className="logo">Mobiliz</div>
        <button className="toggle-button" onClick={toggleView}>
          {showList ? "Harita Görünümü" : "Liste Görünümü"}
        </button>
      </div>

      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Filolar</h2>
          <select
            className="fleet-select"
            value={selectedFleet}
            onChange={(e) => setSelectedFleet(e.target.value)}
          >
            <option value="">Filo Seçin</option>
            <option value="admin">Admin Filo</option>
            <option value="canfilo">Can Filo</option>
            <option value="yildizfilo">Yıldız Filo</option>
          </select>
        </div>

        {showList ? (
          <div className="vehicle-list">
            {getVehiclesForSelectedFleet().map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card">
                <h3>ID: {vehicle.id} - {vehicle.name}</h3>
                <p><strong>Sürücü:</strong> {vehicle.driver}</p>
                <p><strong>Plaka:</strong> {vehicle.plate}</p>
                <p><strong>Sürücü İletişim:</strong> {vehicle.contact}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="map-container">
            <iframe
              title="Demo Map"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=25.0,35.0,45.0,42.0&layer=mapnik`}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;