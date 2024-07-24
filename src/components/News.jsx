import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const qrCodeRef = useRef();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDownload = () => {
    const canvas = qrCodeRef.current.getElementsByTagName('canvas')[0];
    const imageUrl = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text for QR code"
      />
      {text && (
        <div style={{ marginTop: '20px' }} ref={qrCodeRef}>
          <QRCode value={text} />
        </div>
      )}
      {text && (
        <button onClick={handleDownload} style={{ marginTop: '10px' }}>
          Download QR Code
        </button>
      )}
    </div>
  );
}

export default QRCodeGenerator;
