import { Phone, Globe } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 text-xs w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="tel:+254712555336" className="flex items-center gap-2 hover:text-secondary transition">
          <Phone size={14} /> +254 712 555 336
        </a>
        <div className="flex items-center gap-2">
          <Globe size={14} /> Kenya | EN
        </div>
      </div>
    </div>
  );
}
