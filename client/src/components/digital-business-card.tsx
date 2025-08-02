import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Share2, 
  Download, 
  QrCode, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  X,
  Copy,
  Check
} from "lucide-react";
import qrCodeImage from "@assets/julianmartinezresume_qr_1754051802852.png";

interface DigitalBusinessCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DigitalBusinessCard({ isOpen, onClose }: DigitalBusinessCardProps) {
  const [copied, setCopied] = useState(false);

  const businessCardData = {
    name: "Julián Martínez",
    title: "Mechanical Engineering Student",
    subtitle: "Robotics & AI Specialist",
    email: "julian.martinez@example.com", // User should provide real email
    phone: "+1 (787) XXX-XXXX", // User should provide real phone
    location: "Toa Alta, Puerto Rico",
    website: "julianmartinezresume.com",
    linkedin: "linkedin.com/in/julianmartinez",
    github: "github.com/julianmartinez",
    skills: ["SolidWorks", "Python", "React Native", "3D Printing", "VEX Robotics", "MATLAB"],
    achievements: [
      "Top 30 VEX Robotics Global Championship",
      "University of Maryland Research Program",
      "GPA 3.2 Mechanical Engineering"
    ]
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Julián Martínez - Digital Business Card',
          text: 'Connect with Julián Martínez - Mechanical Engineering Student specializing in Robotics & AI',
          url: window.location.href
        });
      } catch (error) {
        console.log('Native sharing failed, falling back to copy');
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    const cardText = `
🎯 ${businessCardData.name}
${businessCardData.title} | ${businessCardData.subtitle}

📧 ${businessCardData.email}
📱 ${businessCardData.phone}
📍 ${businessCardData.location}
🌐 ${businessCardData.website}

🔗 LinkedIn: ${businessCardData.linkedin}
💻 GitHub: ${businessCardData.github}

🏆 Key Achievements:
${businessCardData.achievements.map(achievement => `• ${achievement}`).join('\n')}

💡 Core Skills: ${businessCardData.skills.join(' • ')}

Portfolio: ${window.location.href}
    `.trim();

    try {
      await navigator.clipboard.writeText(cardText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard');
    }
  };

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${businessCardData.name}
TITLE:${businessCardData.title}
EMAIL:${businessCardData.email}
TEL:${businessCardData.phone}
ADR:;;${businessCardData.location};;;;
URL:https://${businessCardData.website}
NOTE:${businessCardData.subtitle} - ${businessCardData.achievements.join(', ')}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'julian-martinez-contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-[95vw] max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Digital Business Card
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-slate-100 dark:hover:bg-slate-700 p-2"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Business Card Content */}
        <div className="p-6">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-6">
              {/* Header Section */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {businessCardData.name}
                </h2>
                <p className="text-primary font-semibold mb-1">
                  {businessCardData.title}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {businessCardData.subtitle}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-slate-700 dark:text-slate-300">{businessCardData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-slate-700 dark:text-slate-300">{businessCardData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-slate-700 dark:text-slate-300">{businessCardData.location}</span>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center mb-6">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <img 
                    src={qrCodeImage}
                    alt="QR Code to Portfolio"
                    className="w-20 h-20"
                  />
                </div>
              </div>

              {/* Key Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-1">
                  {businessCardData.skills.slice(0, 4).map((skill, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <Button
              onClick={handleShare}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            
            <Button
              onClick={copyToClipboard}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            
            <Button
              onClick={downloadVCard}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 col-span-2"
            >
              <Download className="w-4 h-4" />
              Save Contact (.vcf)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}