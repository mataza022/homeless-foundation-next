"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Empowering widows and women through skills and microfinance.</p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-4xl">
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

          <div className="mt-10 text-center">
            <button onClick={() => window.dispatchEvent(new Event("open-donation-modal"))} className="bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg inline-block">Support the Women's Wing</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
