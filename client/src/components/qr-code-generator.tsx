import qrCodeImage from "@assets/julianmartinezresume_qr_1754051802852.png";

interface QRCodeGeneratorProps {
  url?: string;
  size?: number;
}

export function QRCodeGenerator({ size = 150 }: QRCodeGeneratorProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-sm text-slate-500 dark:text-slate-400">Scan to view my portfolio</p>
      <img 
        src={qrCodeImage}
        alt="QR Code to Julian Martinez Portfolio"
        width={size}
        height={size}
        className="border rounded-lg shadow-md bg-white"
      />
    </div>
  );
}
