"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { School, Church } from "lucide-react";

export default function ChildrenWing() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF7F0]">
      <Navbar />
      
      <section className="relative w-full bg-primary text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/childrenempowerment.jpg')" }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Children Empowerment Wing</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Orphans, homeless, disabled and vulnerable children's wing.</p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-4xl space-y-8">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">About the Children's Wing</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            The organization branched into the Children's Wing as one way of reaching the needy people in the community. We support these needy children by donating food, clothes, medical care, education and education materials, and shelter.
          </p>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            For the categories who have projects we give them grand money to boost their projects. All of the categories are registered separately and have their varied genuine certificates but all under one umbrella of the main foundation.
          </p>

          <div className="bg-[#152a1d] text-white p-8 rounded-xl mt-10">
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">Maweni Rescue Home</h3>
            <p className="mb-4">We have a Foundation's Rescue Home for children and widows called <strong>MAWENI RESCUE HOME</strong>. Located in Mombasa, it provides a safe haven for street orphans and vulnerable children who have nowhere else to call home. Here, they receive shelter from the cold nights and heavy rains, hot meals, and access to education.</p>
            <p>We are currently renting a large house to serve these children. Our long-term goal is to buy land and build a permanent, self-sustaining rescue home.</p>
          </div>
        </div>

        {/* Special School Section */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center">
              <School size={28} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary">Upcoming: Special School</h2>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            As part of our Global Fundraising initiative, we are building a <strong>Special School for Needy and Disabled Children</strong> at <strong>Mariakani Kibao Kiche</strong>. This facility will provide an accessible, nurturing, and specialized learning environment for children with disabilities who are often left behind.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Church className="text-secondary" size={24} />
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Under</p>
                <p className="font-bold text-primary">Tumaini Pefa Maweni Miracle Church</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          {/* Changed from Link to Button with Event Trigger */}
          <button onClick={() => window.dispatchEvent(new Event("open-donation-modal"))} className="bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg inline-block">
            Support the Children's Wing
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
