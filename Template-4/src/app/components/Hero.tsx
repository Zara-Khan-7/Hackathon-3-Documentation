import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start lg:flex-row justify-between px-6 sm:px-10">
        
   
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start "> 
          <Image
            src="/images/image 32.png"
            alt="Left Image"
            width={300}
            height={300}
            className="-mt-12"
          />
        </div>

        <div className="lg:w-2/3 lg:pl-0 mt-6 lg:mt-0 text-left"> 
          <p className="text-pink-500 text-sm mt-2"> 
            Best Furniture for Your Castle
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
            New Furniture Collection <br />
            Trends in 2025
          </h1>
          <p className="text-blue-700 mt-4">
          Discover our exclusive range of premium furniture designed to bring style, comfort, and functionality to your space.
          </p>
          <button className="bg-pink-600 text-white text-sm font-semibold px-6 py-3 rounded-full mt-6 hover:bg-pink-500">
           <Link href='/products'>Shop Now</Link> 
          </button>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6"> 
          <Image
            src="/images/sofa promotional header.png"
            alt="Right Image"
            width={700}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
