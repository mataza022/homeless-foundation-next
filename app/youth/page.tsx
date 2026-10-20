"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function YouthWing() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF7F0]">
      <Navbar />
      
      <section className="relative w-full bg-primary text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/youthempowerment.jpg')" }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Youth Empowerment Wing</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Providing grants, education, and support for the youth.</p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-4xl">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">About the Youth Wing</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            The Youth Empowerment Wing is one of the three main categories registered separately under the umbrella of the main foundation. We believe in empowering the next generation to break the cycle of poverty.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Our primary objective is to improve access to quality education and provide grants to youth-led projects. We support students in secondary schools and colleges who cannot afford school fees and education materials.
          </p>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            For youth who have projects, we give them grant money to boost their initiatives, fostering entrepreneurship and self-reliance in the community.
          </p>

          <div className="mt-10 text-center">
            {/* Changed from Link to Button with Event Trigger */}
            <button onClick={() => window.dispatchEvent(new Event("open-donation-modal"))} className="bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg inline-block">
              Support the Youth Wing
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
