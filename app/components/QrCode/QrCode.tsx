import React from 'react';
import QRCode from 'qrcode.react';

interface QrCodeProps {
  url: string;
}

const QrCode: React.FC<QrCodeProps> = ({ url }) => {
  return (
    <div>
      <QRCode value={url} />
    </div>
  );
};

export default QrCode;
