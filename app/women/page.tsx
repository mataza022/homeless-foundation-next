"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Church, HeartPulse } from "lucide-react";

export default function WomenWing() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF7F0]">
      <Navbar />
      
      <section className="relative w-full bg-primary text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/home2.jpeg')" }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Women Empowerment Wing</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Empowering widows and women through skills, healthcare, and financial independence.</p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-4xl space-y-8">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">About the Women's Wing</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            The Women Empowerment Wing was established to address the immense challenges faced by widows and women in Kenya, including loss of property, social exclusion, and economic hardship.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            We provide support by donating food, clothes, and medical care. We also provide business startup kits and microfinance loans to help them achieve financial independence.
          </p>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Through this section, women regain their dignity, achieve financial independence, and become pillars of their communities. Like the other wings, this section is fully registered with its own genuine certificate.
          </p>
        </div>

        {/* Hospital Program Section */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center">
              <HeartPulse size={28} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary">Widows in Hospital Program</h2>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            We run a dedicated program to rescue needy, sick widows who are stuck in hospitals. We cover their hospital bills and provide essential medicines to ensure they receive the care they deserve.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Church className="text-secondary" size={24} />
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Sponsored By</p>
                <p className="font-bold text-primary">Tumaini Pefa Maweni Miracle Church</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Mkomani Ward, Nyali Constituency</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          {/* Changed from Link to Button with Event Trigger */}
          <button onClick={() => window.dispatchEvent(new Event("open-donation-modal"))} className="bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg inline-block">
            Support the Women's Wing
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
