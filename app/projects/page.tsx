import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomeIcon, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

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
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Key Projects</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Making a tangible impact through focused initiatives.</p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
            <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mb-6">
              <HomeIcon size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Maweni Children Rescue Home</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              A safe haven for homeless, orphaned and vulnerable children, providing shelter, education, nutrition, and healthcare in a family-like environment.
            </p>
            <Link href="/children" className="text-accent font-semibold hover:underline">Learn More &rarr;</Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
            <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mb-6">
              <Briefcase size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Widow Business Startup</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Providing training, seed funding, and mentorship to help widows establish sustainable small businesses and achieve financial independence.
            </p>
            <Link href="/women" className="text-accent font-semibold hover:underline">Learn More &rarr;</Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
            <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mb-6">
              <GraduationCap size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Education Support Initiative</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Providing scholarships, school uniforms, books, and improving school infrastructure for homeless children and children from widow-headed households.
            </p>
            <Link href="/children" className="text-accent font-semibold hover:underline">Learn More &rarr;</Link>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
