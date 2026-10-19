"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown, Home, User, Heart, Briefcase, Phone } from "lucide-react";
import TopBar from "./TopBar";
import DonationModal from "./DonationModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleOpenModal = () => setIsDonateOpen(true);
    window.addEventListener("open-donation-modal", handleOpenModal);
    return () => window.removeEventListener("open-donation-modal", handleOpenModal);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen, isSearchOpen]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-col w-full">
      <TopBar />
      
      <header className="bg-white shadow-sm w-full relative z-50">
        <div className="w-full px-4 md:px-8 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3">
            <img src="/assets/logo.jpeg" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover shrink-0" />
            <span className="font-serif text-sm md:text-lg lg:text-xl font-bold text-primary leading-tight">
              Homeless Child and Widows Foundation
            </span>
          </Link>
          
          <nav className="hidden lg:flex gap-6 items-center font-medium text-primary shrink-0">
            <Link href="/" className="hover:text-accent transition">Home</Link>
            <Link href="/about" className="hover:text-accent transition">About Us</Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-accent transition py-8">
                Empowerment <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
                <Link href="/children" className="px-4 py-2 hover:bg-gray-50 hover:text-accent transition">Children's Wing</Link>
                <Link href="/youth" className="px-4 py-2 hover:bg-gray-50 hover:text-accent transition">Youth Wing</Link>
                <Link href="/women" className="px-4 py-2 hover:bg-gray-50 hover:text-accent transition">Women's Wing</Link>
              </div>
            </div>
            
            <Link href="/projects" className="hover:text-accent transition">Projects</Link>
            <Link href="/#contact" className="hover:text-accent transition">Contact</Link>
            <button onClick={() => setIsDonateOpen(true)} className="bg-accent text-white px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition font-semibold shadow-md">
              Donate
            </button>
          </nav>

          <div className="flex lg:hidden items-center gap-2">
            <button type="button" onClick={() => setIsSearchOpen(true)} className="text-primary hover:text-accent transition p-2 cursor-pointer">
              <Search size={24} />
            </button>
            <button type="button" onClick={() => setIsOpen(true)} className="text-primary hover:text-accent transition p-2 cursor-pointer">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="p-4 flex items-center gap-4 border-b border-gray-200">
            <Search size={24} className="text-gray-400" />
            <input type="text" placeholder="Search the site..." className="flex-1 text-lg outline-none text-gray-800" autoFocus />
            <button onClick={() => setIsSearchOpen(false)} className="p-2 bg-gray-100 rounded-lg text-gray-600">
              <X size={24} />
            </button>
          </div>
          <div className="p-6 text-center text-gray-500">Type to search for projects, pages, or information.</div>
        </div>
      )}

      {/* Mobile Menu Overlay (Forest Green header) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden">
          <div className="bg-primary text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full border-2 border-white/20 bg-white" />
              <span className="font-serif font-bold text-lg leading-tight tracking-wide">HOMELESS CHILD AND WIDOWS FOUNDATION</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-2">
            <nav className="flex flex-col">
              <Link href="/" className="flex items-center justify-between p-4 border-b border-gray-100 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition">
                    <Home size={20} />
                  </div>
                  <span className="text-lg font-medium text-gray-800">Home</span>
                </div>
              </Link>

              <Link href="/about" className="flex items-center justify-between p-4 border-b border-gray-100 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition">
                    <User size={20} />
                  </div>
                  <span className="text-lg font-medium text-gray-800">About Us</span>
                </div>
                <ChevronDown size={20} className="text-gray-400" />
              </Link>

              <div className="border-b border-gray-100">
                <button onClick={() => toggleSubmenu('empowerment')} className="w-full flex items-center justify-between p-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition">
                      <Heart size={20} />
                    </div>
                    <span className="text-lg font-medium text-gray-800">Empowerment</span>
                  </div>
                  <ChevronDown size={20} className={`text-gray-400 transition-transform ${openSubmenu === 'empowerment' ? 'rotate-180' : ''}`} />
                </button>
                {openSubmenu === 'empowerment' && (
                  <div className="bg-gray-50 pb-2 px-4 flex flex-col">
                    <Link href="/children" className="py-3 pl-14 text-gray-700 font-medium border-b border-gray-200">Children's Wing</Link>
                    <Link href="/youth" className="py-3 pl-14 text-gray-700 font-medium border-b border-gray-200">Youth Wing</Link>
                    <Link href="/women" className="py-3 pl-14 text-gray-700 font-medium">Women's Wing</Link>
                  </div>
                )}
              </div>

              <Link href="/projects" className="flex items-center justify-between p-4 border-b border-gray-100 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition">
                    <Briefcase size={20} />
                  </div>
                  <span className="text-lg font-medium text-gray-800">Projects</span>
                </div>
                <ChevronDown size={20} className="text-gray-400" />
              </Link>

              <Link href="/#contact" className="flex items-center justify-between p-4 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg font-medium text-gray-800">Contact</span>
                </div>
                <ChevronDown size={20} className="text-gray-400" />
              </Link>
            </nav>
          </div>

          <div className="p-4 border-t border-gray-100 bg-white shrink-0">
            <button onClick={() => { setIsOpen(false); setIsDonateOpen(true); }} className="w-full bg-accent text-white py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition shadow-lg flex items-center justify-center gap-2">
              <Heart size={20} /> Donate Now
            </button>
          </div>
        </div>
      )}

      <DonationModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </div>
  );
}
