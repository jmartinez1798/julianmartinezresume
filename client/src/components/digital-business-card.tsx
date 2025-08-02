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
    title: "Mechanical Engineer",
    subtitle: "Robotics & AI Specialist",
    email: "julian1798@yahoo.com",
    phone: "+1 (787) 974-295X",
    location: "Toa Alta, Puerto Rico",
    website: "julianmartinezresume.com",
    linkedin: "linkedin.com/in/julianmartinez",
    github: "github.com/julianmartinez",
    skills: ["SolidWorks", "Python", "React Native", "3D Printing"],
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose(); // Close modal after scrolling
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-[95vw] max-w-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/30 animate-scaleIn overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
      >
        {/* Close button - minimal and floating */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 backdrop-blur-sm border-0 p-0"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Business Card Content - Modern iOS Style */}
        <div className="p-8 pt-12">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
              {businessCardData.name}
            </h2>
            <p className="text-primary font-semibold text-lg mb-1">
              {businessCardData.title}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              {businessCardData.subtitle}
            </p>
          </div>

          {/* Contact Info with iOS-style cards */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{businessCardData.email}</span>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{businessCardData.phone}</span>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{businessCardData.location}</span>
            </div>
          </div>

          {/* QR Code - Clean and centered */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200/50">
              <img 
                src={qrCodeImage}
                alt="QR Code to Portfolio"
                className="w-24 h-24"
              />
            </div>
          </div>

          {/* Core Skills - Clean pill design */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4 text-center">
              Core Skills
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {businessCardData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons - iOS style */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleShare}
                className="bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 font-semibold text-base"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
              
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="border-primary/30 hover:bg-primary/5 text-primary rounded-2xl py-6 font-semibold text-base"
              >
                {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={downloadVCard}
                variant="outline"
                className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800 rounded-2xl py-6 font-semibold text-base"
              >
                <Download className="w-5 h-5 mr-2" />
                Save Contact
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-accent/30 hover:bg-accent/5 text-accent rounded-2xl py-6 font-semibold text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}