"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Utensils, Shirt, Stethoscope, GraduationCap, Home as HomeIcon, ArrowRight, ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [currentBg, setCurrentBg] = useState(1);
  const backgrounds = ["/assets/home.jpeg", "/assets/home2.jpeg"];
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev === backgrounds.length ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const triggerDonate = () => window.dispatchEvent(new Event("open-donation-modal"));
  const nextBg = () => setCurrentBg((prev) => (prev === backgrounds.length ? 1 : prev + 1));
  const prevBg = () => setCurrentBg((prev) => (prev === 1 ? backgrounds.length : prev - 1));

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Message from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/254712555336?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Reduced padding and margins for a much shorter mobile hero */}
      <section id="home" className="relative bg-primary text-white pt-10 pb-16 md:py-32 overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentBg === index + 1 ? "opacity-40" : "opacity-0"}`}
            style={{ backgroundImage: `url('${bg}')` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a150f] via-[#0a150f]/80 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-6 w-full flex flex-col items-start text-left">
          <div className="flex items-center gap-3 mb-2 md:mb-6">
            <span className="w-6 md:w-12 h-[2px] bg-accent"></span>
            <span className="text-accent tracking-widest text-[10px] md:text-sm font-semibold uppercase">Our Mission</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight max-w-4xl">
            Rescuing Homeless <br className="hidden md:block"/> Children & Empowering <br className="hidden md:block"/> Widows in Kenya.
          </h1>
          
          <p className="text-sm md:text-xl text-gray-300 mb-6 md:mb-10 max-w-2xl leading-relaxed">
            The Homeless Child and Widows Foundation is dedicated to transforming lives through child rescue initiatives and widow empowerment programs across Kenya. We provide shelter, education, and sustainable support.
          </p>

          <div className="flex flex-row gap-3 w-full md:w-auto">
            <button onClick={triggerDonate} className="flex-1 md:flex-none bg-accent text-white px-4 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-opacity-90 transition shadow-lg">
              Donate Now
            </button>
            <Link href="/about" className="flex-1 md:flex-none bg-black/30 border border-white/30 backdrop-blur-sm text-white px-4 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-white hover:text-primary transition flex items-center justify-center gap-2 shadow-lg">
              About Us <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
            </Link>
          </div>
        </div>

        {/* Slider Controls - moved slightly up on mobile to save space */}
        <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-20 flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-1 md:gap-2 font-mono text-[10px] md:text-sm">
            <span className="text-white">0{currentBg}</span>
            <span className="text-gray-400">/ 0{backgrounds.length}</span>
          </div>
          <div className="flex gap-1 md:gap-2">
            <button onClick={prevBg} className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition">
              <ChevronLeft size={16} className="md:w-5 md:h-5" />
            </button>
            <button onClick={nextBg} className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-opacity-90 transition">
              <ChevronRight size={16} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">Our 5 Keys of Operation</h3>
          <p className="text-gray-500 mb-8 md:mb-10 text-sm md:text-base max-w-2xl mx-auto">We achieve our mission by donating to those in need through these core areas:</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
            {[
              { title: "Food", icon: Utensils },
              { title: "Clothes", icon: Shirt },
              { title: "Medicine", icon: Stethoscope },
              { title: "Education", icon: GraduationCap },
              { title: "Shelter", icon: HomeIcon }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#FBF7F0] p-4 md:p-6 rounded-2xl border border-gray-100 flex flex-col items-center hover:shadow-md transition">
                  <Icon size={28} className="text-accent mb-2 md:mb-4 md:w-8 md:h-8" />
                  <h4 className="font-bold text-sm md:text-base text-primary">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-[#FBF7F0]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">Three Main Sections of Empowerment</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Our organisation is divided into three main sections. All of these sections have a Certificate of Registration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Link href="/children" className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="h-48 md:h-56 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/childrenempowerment.jpg')" }}>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2 md:mb-4">Children Empowerment</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Focusing on orphans, homeless, disabled and vulnerable children's welfare.</p>
                <span className="text-accent text-sm md:text-base font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">View Page <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" /></span>
              </div>
            </Link>

            <Link href="/youth" className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="h-48 md:h-56 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/youthempowerment.jpg')" }}>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2 md:mb-4">Youth Empowerment</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Providing youth with the tools, grants, and support for sustainable livelihoods.</p>
                <span className="text-accent text-sm md:text-base font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">View Page <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" /></span>
              </div>
            </Link>

            <Link href="/women" className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="h-48 md:h-56 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/home2.jpeg')" }}>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2 md:mb-4">Women Empowerment</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Supporting widows and women through skills training and financial independence.</p>
                <span className="text-accent text-sm md:text-base font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">View Page <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">Get in Touch</h2>
            <p className="text-gray-600">Have a question, want to volunteer, or need more information? Send us a message on WhatsApp.</p>
          </div>
          
          <form onSubmit={handleWhatsAppSubmit} className="bg-[#FBF7F0] p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Your Name</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Your Email</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="john@example.com" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
              <input type="text" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="How can we help?" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">Message</label>
              <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1ebe5b] transition shadow-md w-full md:w-auto flex items-center justify-center gap-2">
              <MessageCircle size={18} /> Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section id="donate" className="py-16 md:py-20 px-6 bg-[#FBF7F0] text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">Support Our Work</h2>
          <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">Your donation directly impacts the lives of homeless children and widows. With transparency as our cornerstone, we ensure that 90% of every donation goes directly to our programs.</p>
          <button onClick={triggerDonate} className="bg-accent text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-opacity-90 transition shadow-xl">Donate via M-PESA</button>
        </div>
      </section>

      <Footer />
      
      <a href="https://wa.me/254712555336" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition z-50 flex items-center justify-center">
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </main>
  );
}
