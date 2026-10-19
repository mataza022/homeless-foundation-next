import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Learn more about the Homeless Child and Widows Foundation.</p>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-4xl">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            The organization was started on January 2020. Its main aim was to give support to those who were affected by the deadly CORONA Virus in Kenya especially the old people and the children. 
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            The organization was later registered by the Kenya Government as a <strong>COMMUNITY BASED ORGANIZATION (CBO)</strong> whereby we were issued with a varied certificate to serve the community. 
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            The organization later branched into three main categories in one way of reaching the needy people in the community as following:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 text-lg space-y-2">
            <li>Orphans, homeless, disabled and vulnerable Children's wing</li>
            <li>Women empowerment wing</li>
            <li>Youth empowerment wing</li>
          </ul>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            All the three categories are registered separately and have their varied genuine certificates but all under one umbrella of the main foundation. All the certificates are much varied up to date. We support these needy people by donating food, clothes, medical care, education and education materials and shelter. For the categories who have projects we give them grand money to boost their projects.
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary mb-6 mt-12">Our Team</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            We have rescued many need children and the community as a whole due to our highly trained staffs starting from our chairman who holds a diploma certificate in this field. Other staffs are social workers who have fronted to work hard for the poor people mostly the needy children. The Kenya Government officials assists us in case of advises in problem solving. 
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            We have children in primary schools, secondary schools and colleges. We are covering a large area due to our high experiences overcoming challenges when they occur. Our staffs and members of this organization are always ready to work day and night to see that the needy people in the community gets what they needs most.
          </p>
          
          <div className="bg-[#152a1d] text-white p-8 rounded-xl mt-10 text-center">
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">Where We Operate</h3>
            <p className="mb-4">We are officially registered to operate in:</p>
            <p className="text-xl font-bold">Mombasa, Kilifi, Nyandarua, Nairobi, Lamu</p>
            <p className="mt-6 text-sm text-gray-400">NGO Registration Number: D7UNKJV</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
