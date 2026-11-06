import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Download, ShieldCheck, HeartPulse, Users, Baby } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF7F0]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full bg-primary text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/home.jpeg')" }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Rescuing vulnerable, orphans, people living with HIV and undergoing violent extremism in the community.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-5xl space-y-12">
        
        {/* Our Story & Mission */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Story & Mission</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Welcome to the <strong>HOMELESS CHILD & WIDOWS FOUNDATION</strong>. We are situated in Kongowea, Mombasa, Kenya. Our mission is to rescue and empower some of the most vulnerable members of our society: orphans, people living with HIV (PLHIV), vulnerable children, and women who have experienced violence or are at risk of violent extremism.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            We provide comprehensive support through shelter, healthcare, education, counseling, and legal assistance, ensuring that these individuals not only survive but thrive. By fostering a supportive environment, we aim to break the cycles of poverty, discrimination, and violence.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
             <h3 className="font-serif text-xl font-bold text-primary mb-3">Our Key Objectives</h3>
             <ul className="list-disc list-inside text-gray-600 space-y-2">
               <li>Provide Immediate Safety and Shelter.</li>
               <li>Deliver Comprehensive Healthcare and Psychological Support.</li>
               <li>Empower Through Education and Skill Development.</li>
               <li>Promote Legal Protection and Advocacy.</li>
               <li>Foster Community Integration and Social Support.</li>
             </ul>
          </div>
        </div>

        {/* The Three Registered Groups */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">Our Registered Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#FBF7F0] p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby size={24} />
              </div>
              <h3 className="font-bold text-primary mb-2">Palm Tree Orphans & Disabled Care Centre</h3>
              <p className="text-sm text-gray-600">Our Children's Wing. Registered CBO in 2022.</p>
            </div>

            <div className="bg-[#FBF7F0] p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-primary mb-2">Kongowea Morning Star Self Help Group</h3>
              <p className="text-sm text-gray-600">Our Youth Wing. Registered SHG in 2017.</p>
            </div>

            <div className="bg-[#FBF7F0] p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse size={24} />
              </div>
              <h3 className="font-bold text-primary mb-2">Kongowea Women Bananas Wholesalers</h3>
              <p className="text-sm text-gray-600">Our Women's Wing. Registered SHG in 2023.</p>
            </div>

          </div>
        </div>

        {/* Legal Documents & Downloads */}
        <div className="bg-[#152a1d] text-white p-10 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <ShieldCheck size={32} className="text-secondary" />
            <h2 className="font-serif text-3xl font-bold">Registration & Official Documents</h2>
          </div>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Transparency is our cornerstone. We are a fully registered organization under the laws of Kenya. You can view and download our official project proposal and registration certificates below.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/assets/proposal.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition shadow-md flex-1"
            >
              <FileText size={20} /> View Project Proposal (PDF)
            </a>
            
            <a 
              href="/assets/certificates.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-yellow-500 transition shadow-md flex-1"
            >
              <Download size={20} /> View Certificates (PDF)
            </a>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl text-center">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">Where We Operate</h3>
          <p className="mb-4 text-gray-600">We are officially registered to operate in:</p>
          <p className="text-xl font-bold text-primary mb-6">Mombasa, Kilifi, Nyandarua, Nairobi, Lamu</p>
          <p className="text-sm text-gray-500">NGO Registration Number: D7UNKJV</p>
          <p className="text-sm text-gray-500">P.O Box: 89324-80100-Mombasa</p>
        </div>

      </section>
      <Footer />
    </main>
  );
}
