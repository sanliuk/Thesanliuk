import React, { useEffect } from 'react';
import qrImage from '../Assets/QRcode.png'; // Assicurati che il percorso sia corretto
import './PopupModal.css'; // Assicurati che il percorso sia corretto

const PopupModal = ({ onClose }) => {
  // Funzione per gestire il clic esterno
  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-modal') onClose();
  };

  // Aggiungi l'ascoltatore di eventi quando il componente viene montato
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    // Rimuovi l'ascoltatore di eventi quando il componente viene smontato
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div id="popup-modal" className="popup-modal">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Download the Mobile Game:</h2>
        <img src={qrImage} alt="QR Code" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default PopupModal;
