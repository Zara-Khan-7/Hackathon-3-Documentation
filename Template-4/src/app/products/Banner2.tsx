import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative">
     
      <div className="w-screen">
        <Image
          src="/images/Group 162.png" 
          alt="Banner Image"
          width={1920} 
          height={650} 
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="flex justify-center mt-12 px-4">
        <Image
          src="/images/image 1174.png" 
          alt="Product Image"
          width={500}
          height={450}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
