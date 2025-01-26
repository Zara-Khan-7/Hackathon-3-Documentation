'use client';

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactUs() {
  return (
    <>
    {/* Header */}
    <Header />
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Contact Us</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 flex flex-wrap gap-12">
        {/* Left Section */}
        <div className="flex-1">
          {/* Information About Us */}
          <h2 className="text-2xl font-bold text-[#151875] mb-4">Information About Us</h2>
          <p className="text-gray-600 mb-6">
          Welcome to Zara & Rabeeka&apos;s furniture destination born from a shared passion for timeless design and exceptional quality. As siblings, we’ve combined our unique styles and vision to create a space where you can find furniture that transforms your house into a home. Every piece in our collection is carefully selected to balance functionality, comfort, and elegance, ensuring it complements your lifestyle.
          </p>
          <div className="flex gap-2 mb-8">
            <span className="w-3 h-3 rounded-full bg-[#5625DF]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FF27B7]"></span>
            <span className="w-3 h-3 rounded-full bg-[#37DAF3]"></span>
          </div>

          {/* Get in Touch */}
          <h2 className="text-2xl font-bold text-[#151875] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
          We would love to hear from you! Whether you have questions, need assistance, or simply want to say hello, feel free to reach out:<br></br>

            📧 Zara: zaara.khan1795.zy@gmail.com<br></br>
            📧 Rabeeka: rabz.khan@yahoo.com<br></br>

            Your feedback and inquiries mean the world to us. Let&apos;’s connect!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Your E-mail*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <textarea
              placeholder="Type your message*"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            ></textarea>
            <button className="bg-[#FB2E86] text-white py-3 px-8 rounded-md hover:bg-[#F94C9B] transition-colors">
              Send Mail
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          {/* Contact Way */}
          <h2 className="text-2xl font-bold text-[#151875] mb-8">Contact Way</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#5726DF]"></span>
              <div className="text-gray-600">
                <p>Tel: 34-367-7318</p>
                <p>E-Mail: zaara.khan1795.zy@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#FB2E86]"></span>
              <div className="text-gray-600">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#FFB265]"></span>
              <div className="text-gray-600">
                <p>Karachi, Pakistan</p>
                <p>North Nazimabad, Block N</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-[#1BE982]"></span>
              <div className="text-gray-600">
                <p>Free standard shipping</p>
                <p>on all orders</p>
              </div>
            </div>
          </div>

          <div>
      <Image
        src="/images/connect.png" // Reference the image using its path in the public folder
        alt="Connect"
        width={500} // Adjust the width as needed
        height={500} // Adjust the height as needed
      />
    </div>    
     </div>
      </div>
    </div>
     {/* Footer */}
     <Footer />
    </>
  
  );
}

export default ContactUs;