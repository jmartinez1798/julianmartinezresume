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
    phone: "+1 (787) 397-4295",
    location: "Toa Alta, Puerto Rico",
    website: "julianmartinezresume.com",
    linkedin: "linkedin.com/in/julianmartinez",
    github: "github.com/julianmartinez",
    skills: ["SolidWorks", "Python", "React Native", "3D Printing"],
    tagline: "Building the future, one idea at a time 🚀",
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
        className="business-card-modal relative w-[95vw] max-w-[400px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-[12px] rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] animate-scaleIn overflow-hidden"
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

        {/* Business Card Content */}
        <div className="card-container p-6 text-center">
          {/* Profile Header */}
          <div className="mb-4">
            <h2 className="text-[28px] font-bold text-slate-900 dark:text-slate-100 mb-1 tracking-tight">
              {businessCardData.name}
            </h2>
            <p className="text-[18px] font-semibold text-primary m-0">
              {businessCardData.title}
            </p>
            <p className="text-[15px] text-slate-600 dark:text-slate-400 mt-0.5">
              {businessCardData.subtitle}
            </p>
          </div>

          {/* Contact Info - Clean and simple */}
          <div className="contact-info my-4 text-[14px]">
            <a 
              href={`mailto:${businessCardData.email}`}
              className="block text-[#0077cc] dark:text-blue-400 my-1 no-underline hover:underline"
            >
              {businessCardData.email}
            </a>
            <a 
              href={`tel:${businessCardData.phone}`}
              className="block text-[#0077cc] dark:text-blue-400 my-1 no-underline hover:underline"
            >
              {businessCardData.phone}
            </a>
            <p className="text-slate-600 dark:text-slate-400 my-1">
              {businessCardData.location}
            </p>
          </div>

          {/* QR Code with glow animation */}
          <div className="qr-section my-5">
            <div className="flex justify-center">
              <img 
                src={qrCodeImage}
                alt="QR Code to Portfolio"
                className="qr-code w-[120px] h-[120px] rounded-lg"
                style={{
                  animation: 'glow 2s ease-in-out infinite alternate'
                }}
              />
            </div>
            <p className="tagline mt-3 text-[14px] text-slate-700 dark:text-slate-300">
              {businessCardData.tagline}
            </p>
          </div>

          {/* Core Skills */}
          <div className="skills mt-5">
            <h3 className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Core Skills
            </h3>
            <div className="skill-tags flex flex-wrap justify-center gap-2">
              {businessCardData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-[20px] text-[13px] inline-block"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="button-group mt-6 flex flex-col gap-2.5">
            <Button
              onClick={handleShare}
              className="bg-[#1e3a8a] hover:bg-[#2563eb] text-white rounded-xl py-2.5 px-4 text-[14px] font-medium transition-colors duration-300"
            >
              🔗 Share
            </Button>
            
            <Button
              onClick={copyToClipboard}
              className="bg-[#1e3a8a] hover:bg-[#2563eb] text-white rounded-xl py-2.5 px-4 text-[14px] font-medium transition-colors duration-300"
            >
              📋 {copied ? 'Copied!' : 'Copy'}
            </Button>
            
            <Button
              onClick={downloadVCard}
              className="bg-[#1e3a8a] hover:bg-[#2563eb] text-white rounded-xl py-2.5 px-4 text-[14px] font-medium transition-colors duration-300"
            >
              💾 Save Contact (.vcf)
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl py-2.5 px-4 text-[14px] font-medium"
            >
              📧 Contact Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}