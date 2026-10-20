import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Church } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF7F0]">
      <Navbar />
      
      <section className="relative w-full bg-primary text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/home.jpeg')" }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Learn more about the Homeless Child & Widows Support Centre.</p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-4xl">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Welcome to the <strong>HOMELESS CHILD & WIDOWS SUPPORT CENTRE</strong>, where we support homeless children and poor widows. We are situated in <strong>Kongowea Maweni, behind Sineno Primary School</strong>.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            In this centre, we support them with food, shelter, clothes, education, and health attention—especially the aged widows and widowers.
          </p>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            The organization was started in January 2020 to give support to those affected by the deadly COVID-19 virus in Kenya, especially the old people and the children. We are a registered Community Based Organization (CBO) under the umbrella of the main foundation, with three distinct wings: Children's Empowerment, Youth Empowerment, and Women's Empowerment.
          </p>

          <div className="bg-gray-50 p-8 rounded-xl my-10 border border-gray-200">
             <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Partners & Founders</h3>
             <p className="text-gray-600 leading-relaxed mb-4">
               We are proud to be the founders of the <strong>Palm Tree Orphans and Disabled Care Centre</strong>. 
             </p>
             <p className="text-gray-600 leading-relaxed mb-4">
               We also work closely under the umbrella of <strong>Tumaini Pefa Maweni Miracle Church</strong>, who generously sponsor our Widows in Hospital Program and our upcoming Special School for Needy and Disabled Children.
             </p>
          </div>

          <h2 className="font-serif text-3xl font-bold text-primary mb-6 mt-12">Our Future Goal</h2>
          <div className="bg-[#152a1d] text-white p-8 rounded-xl mt-6">
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">Building a Technical College & Special School</h3>
            <p className="text-gray-300 leading-relaxed">
              We now want to build a technical college in Mombasa Kongowea for the needy children who can't afford to join colleges. Additionally, we are raising funds to build a special school for disabled children at Mariakani Kibao Kiche.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl mt-10 text-center">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Where We Operate</h3>
            <p className="mb-4 text-gray-600">We are officially registered to operate in:</p>
            <p className="text-xl font-bold text-primary">Mombasa, Kilifi, Nyandarua, Nairobi, Lamu</p>
            <p className="mt-6 text-sm text-gray-500">NGO Registration Number: D7UNKJV</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
