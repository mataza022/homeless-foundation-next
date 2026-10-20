"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomeIcon, Briefcase, GraduationCap, Wrench, School, HeartPulse, Church } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF7F0]">
      <Navbar />
      
      <section className="relative w-full bg-primary text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/home.jpeg')" }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Global Fund Raising Projects</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Together We Can Make a Difference. Organized by the Homeless Child and Widows Foundation in partnership with Tumaini Pefa Maweni Miracle Church.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-6xl">
        
        {/* Highlight Banner */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-accent">
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-2">Estimated Cost: KSH. 70 Million</h2>
            <p className="text-gray-600">Help us build a brighter future for needy and disabled children in Kenya.</p>
          </div>
          <button onClick={() => window.dispatchEvent(new Event("open-donation-modal"))} className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition shadow-md whitespace-nowrap">
            Donate & Support
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Special School */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full border-t-4 border-t-primary">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <School size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Special School for Needy & Disabled Children</h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
              We are building a dedicated special school at <strong>Mariakani Kibao Kiche</strong> for needy and disabled children, providing them with an accessible and nurturing learning environment.
            </p>
            <div className="text-xs text-gray-500 flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
              <Church size={14} className="text-accent" /> Under Tumaini Pefa Maweni Miracle Church
            </div>
          </div>

          {/* College */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full border-t-4 border-t-primary">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <Wrench size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">College for Needy Children</h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
              Building a technical college in <strong>Mombasa Kongowea</strong> for children who cannot afford to join colleges due to financial constraints, equipping them with practical skills.
            </p>
            <div className="text-xs text-gray-500 flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
              <Church size={14} className="text-accent" /> Under Tumaini Pefa Maweni Miracle Church
            </div>
          </div>

          {/* Widows in Hospital */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full border-t-4 border-t-accent">
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
              <HeartPulse size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Widows in Hospital Program</h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
              Rescuing needy, sick widows by paying their hospital bills and providing essential medicines. Sponsored in Mkomani ward, Nyali constituency.
            </p>
            <div className="text-xs text-gray-500 flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
              <Church size={14} className="text-accent" /> Sponsored by Tumaini Pefa Maweni Miracle Church
            </div>
          </div>

          {/* Maweni Rescue Home */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <HomeIcon size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Maweni Children Rescue Home</h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
              A safe haven for homeless, orphaned and vulnerable children, providing shelter, education, nutrition, and healthcare in a family-like environment.
            </p>
            <button onClick={() => window.dispatchEvent(new Event("open-donation-modal"))} className="text-accent font-semibold hover:underline text-sm mt-2 text-left">Support this Project &rarr;</button>
          </div>

          {/* Palm Tree Orphans */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <GraduationCap size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Palm Tree Orphans & Disabled Care Centre</h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
              We are the founders of the Palm Tree Orphans and Disabled Care Centre, extending our reach to support more vulnerable individuals in the community.
            </p>
          </div>

          {/* Widow Business Startup */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <Briefcase size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">Widow Business Startup</h3>
            <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
              Providing training, seed funding, and mentorship to help widows establish sustainable small businesses and achieve financial independence.
            </p>
            <button onClick={() => window.dispatchEvent(new Event("open-donation-modal"))} className="text-accent font-semibold hover:underline text-sm mt-2 text-left">Support this Project &rarr;</button>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
