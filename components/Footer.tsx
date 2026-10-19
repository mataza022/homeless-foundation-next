import { MapPin, Mail, Phone, MessageCircle, Image as ImageIcon } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer id="contact" className="bg-[#152a1d] text-gray-300 py-16 border-t-4 border-secondary">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/assets/logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full object-cover shrink-0" />
            <h4 className="font-serif text-white text-lg font-bold leading-tight">Homeless Child and Widows Foundation</h4>
          </div>
          <p className="text-sm mb-6 leading-relaxed">
            Registered Non-Profit in Kenya dedicated to rescuing homeless children and empowering widows through sustainable programs.
          </p>
          <p className="text-sm font-semibold text-white">
            NGO Reg: <span className="text-secondary font-normal">D7UNKJV</span>
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-secondary transition flex items-center gap-2">Home</a></li>
            <li><a href="#missions" className="hover:text-secondary transition flex items-center gap-2">Our Missions</a></li>
            <li><a href="#donate" className="hover:text-secondary transition flex items-center gap-2">Donate</a></li>
            <li><a href="https://photos.app.goo.gl/pAPa5cNk598MantH8" target="_blank" className="hover:text-secondary transition flex items-center gap-2">Photo Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-secondary shrink-0 mt-1" />
              <span>Fair Deal RM5, Nyali, Mombasa<br/>P.O. Box 89324, 80100</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-secondary shrink-0" />
              <a href="mailto:homelesschild.rescuefoundation@gmail.com" className="hover:text-secondary transition break-all">homelesschild.rescuefoundation@gmail.com</a>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-secondary shrink-0" />
              <a href="tel:+254712555336" className="hover:text-secondary transition">+254 712 555 336</a>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-secondary shrink-0" />
              <a href="tel:+254733181830" className="hover:text-secondary transition">+254 733 181 830</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Follow Us</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100050152284174" target="_blank" className="hover:text-secondary transition flex items-center gap-3">
                <svg className="w-[18px] h-[18px] text-secondary fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://whatsapp.com/channel/0029Vb6YGf7ADTOCqxTtGL3n" target="_blank" className="hover:text-secondary transition flex items-center gap-3">
                <MessageCircle size={18} className="text-secondary" /> WhatsApp Channel
              </a>
            </li>
            <li>
              <a href="https://photos.app.goo.gl/pAPa5cNk598MantH8" target="_blank" className="hover:text-secondary transition flex items-center gap-3">
                <ImageIcon size={18} className="text-secondary" /> Photo Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <p>
          &copy; {currentYear} Homeless Child and Widows Foundation. All rights reserved.
        </p>
        <p>
          Created by <span className="text-secondary font-semibold">Webora Digital Solutions</span>
        </p>
      </div>
    </footer>
  );
}
