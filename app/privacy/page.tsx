import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF7F0]">
      <Navbar />
      
      <section className="bg-primary text-white py-16 px-6 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-200">Last updated: {new Date().getFullYear()}</p>
      </section>

      <section className="py-20 px-6 container mx-auto max-w-3xl">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 prose prose-green max-w-none text-gray-600">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
          <p className="mb-6">We only collect information that you voluntarily provide to us when you fill out a contact form, donate via M-PESA, or reach out via WhatsApp or Email. This may include your name, email address, phone number, and donation details.</p>

          <h2 className="font-serif text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">We use the information we collect to acknowledge your donations, respond to your inquiries, and keep you updated on the progress of our projects (Maweni Rescue Home, Special School, etc.). We do not sell or share your data with third parties.</p>

          <h2 className="font-serif text-2xl font-bold text-primary mb-4">3. M-PESA Donations</h2>
          <p className="mb-6">When you donate via M-PESA Paybill, your transaction is handled securely by Safaricom. We only see the confirmation message (which may include your name and the amount) to acknowledge your donation.</p>

          <h2 className="font-serif text-2xl font-bold text-primary mb-4">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <strong>homelesschild.rescuefoundation@gmail.com</strong>.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
