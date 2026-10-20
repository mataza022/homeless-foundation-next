"use client";
import { useState } from "react";

export default function DonationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyPaybill = () => {
    navigator.clipboard.writeText("4098209");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[2000] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-accent">&times;</button>
        <h2 className="font-serif text-2xl font-bold text-primary mb-2">Donate via M-PESA</h2>
        <p className="text-gray-600 mb-6">Your donation directly impacts the lives of homeless children and widows.</p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <p className="font-semibold mb-2">1. Go to M-PESA Menu</p>
          <p className="font-semibold mb-2">2. Select Lipa na M-PESA</p>
          <p className="font-semibold mb-4">3. Select Pay Bill</p>
          
          <div className="flex justify-between items-center bg-white p-3 rounded-md border-l-4 border-accent mb-3 shadow-sm">
            <span>Business Number: <strong className="text-lg">4098209</strong></span>
            <button onClick={copyPaybill} className="bg-primary text-white text-xs px-3 py-1.5 rounded hover:bg-accent transition">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div className="flex justify-between items-center bg-white p-3 rounded-md border-l-4 border-accent mb-6 shadow-sm">
            <span>Account Number: <strong className="text-lg uppercase">RESCUE CENTRE</strong></span>
          </div>
          
          <p className="font-semibold mb-2">4. Enter Amount</p>
          <p className="font-semibold mb-2">5. Enter M-PESA PIN and Confirm</p>
        </div>

        {/* WhatsApp Confirmation Note */}
        <div className="bg-[#25D366]/10 border-l-4 border-[#25D366] p-4 mt-6 rounded-r-md">
          <p className="text-sm text-gray-700">
            <strong>After sending, please WhatsApp your transaction code to </strong> 
            <a href="https://wa.me/254712555336" className="text-[#1ebe5b] font-bold hover:underline">+254 712 555 336</a> 
            <strong> so we can acknowledge your donation.</strong>
          </p>
        </div>

        <button onClick={onClose} className="w-full bg-accent text-white py-3 rounded-lg font-bold mt-6 hover:bg-opacity-90 transition">Close</button>
      </div>
    </div>
  );
}
