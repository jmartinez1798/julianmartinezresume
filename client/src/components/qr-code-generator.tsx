import { useEffect, useRef } from "react";

declare global {
  interface Window {
    QRCode: any;
  }
}

interface QRCodeGeneratorProps {
  url: string;
  size?: number;
}

export function QRCodeGenerator({ url, size = 150 }: QRCodeGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateQRCode = async () => {
      if (!canvasRef.current) return;

      // Dynamically import QRCode library
      try {
        const QRCode = await import("qrcode");
        
        await QRCode.toCanvas(canvasRef.current, url, {
          width: size,
          margin: 2,
          color: {
            dark: "#2563eb",
            light: "#ffffff"
          }
        });
      } catch (error) {
        console.error("Failed to generate QR code:", error);
      }
    };

    generateQRCode();
  }, [url, size]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-sm text-slate-500 dark:text-slate-400">Escanea para ver mi portafolio</p>
      <canvas 
        ref={canvasRef}
        className="border rounded-lg shadow-md bg-white"
      />
    </div>
  );
}
