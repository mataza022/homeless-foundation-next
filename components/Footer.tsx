import { MapPin, Mail, Phone, MessageCircle, Image as ImageIcon, User } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer id="footer" className="bg-[#152a1d] text-gray-300 py-16 border-t-4 border-secondary">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-1 rounded-full shrink-0 shadow-sm">
              <img src="/assets/logo.jpeg" alt="Logo" className="h-12 w-12 object-contain rounded-full" />
            </div>
            <h4 className="font-serif text-white text-lg font-bold leading-tight">Homeless Child & Widows Support Centre</h4>
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
            <li><Link href="/" className="hover:text-secondary transition flex items-center gap-2">Home</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition flex items-center gap-2">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-secondary transition flex items-center gap-2">Projects</Link></li>
            <li><Link href="/#donate" className="hover:text-secondary transition flex items-center gap-2">Donate</Link></li>
            <li><Link href="/privacy" className="hover:text-secondary transition flex items-center gap-2">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-secondary shrink-0 mt-1" />
              <span>Kongowea Maweni, Behind Sineno Primary School, Mombasa</span>
            </li>
            <li className="flex gap-3 items-start mt-4">
              <Phone size={18} className="text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Official Office Lines</p>
                <a href="tel:+254712555336" className="block hover:text-secondary transition mb-1">+254 712 555 336</a>
                <a href="tel:+254733181830" className="block hover:text-secondary transition">+254 733 181 830</a>
              </div>
            </li>
            <li className="flex gap-3 items-start mt-2">
              <User size={18} className="text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Personal Lines</p>
                <a href="tel:+254726337360" className="block hover:text-secondary transition mb-1">+254 726 337 360</a>
                <a href="tel:+254732411458" className="block hover:text-secondary transition mb-1">+254 732 411 458</a>
                <a href="tel:+254722411458" className="block hover:text-secondary transition">+254 722 411 458</a>
              </div>
            </li>
            <li className="flex gap-3 items-start mt-2">
              <Mail size={18} className="text-secondary shrink-0 mt-1" />
              <a href="mailto:homelesschild.rescuefoundation@gmail.com" className="hover:text-secondary transition break-all">homelesschild.rescuefoundation@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Follow Our Channels</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="https://whatsapp.com/channel/0029VaFUnasBKfhsZXDEei3n" target="_blank" className="hover:text-secondary transition flex items-center gap-3 font-semibold text-white">
                <MessageCircle size={18} className="text-secondary" /> Main WhatsApp Channel
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@kongoweapalmtreeorphanscar1157" target="_blank" className="hover:text-secondary transition flex items-center gap-3">
                <svg className="w-[18px] h-[18px] text-secondary fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube Channel
              </a>
            </li>
            <li>
              <a href="https://whatsapp.com/channel/0029Vb8Oho9ATRSeLI3E5Y2Y" target="_blank" className="hover:text-secondary transition flex items-center gap-3">
                <MessageCircle size={18} className="text-secondary" /> Old Age Management Channel
              </a>
            </li>
            <li>
              {/* RESTORED PHOTO GALLERY */}
              <a href="https://photos.app.goo.gl/pAPa5cNk598MantH8" target="_blank" className="hover:text-secondary transition flex items-center gap-3">
                <ImageIcon size={18} className="text-secondary" /> Photo Gallery
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100050152284174" target="_blank" className="hover:text-secondary transition flex items-center gap-3 mt-2 pt-2 border-t border-white/10">
                <svg className="w-[18px] h-[18px] text-secondary fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex justify-center items-center text-xs text-gray-400 gap-4">
        <p>
          &copy; {currentYear} Homeless Child & Widows Support Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
