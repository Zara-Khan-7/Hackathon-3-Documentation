
import Image from 'next/image';

const Categories = () => {
  return (
    <div className="py-12">
  
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Top Categories</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
      
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">

          <div className="flex justify-center">
            <Image
              src="/images/Top catagories.png" 
              alt="Product 1"
              width={300} 
              height={300} 
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Top catagories (1).png" 
              alt="Product 2"
              width={300} 
              height={300} 
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Top catagories (2).png" 
              alt="Product 3"
              width={300} 
              height={300} 
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Top catagories (3).png" 
              alt="Product 4"
              width={300} 
              height={300} 
              className="object-cover rounded-lg"
            />
          </div>

        </div>

        <div className="flex justify-center mt-4 gap-2">
 
          <div className="w-3 h-3 rounded-full bg-[#D5006D]"></div>
          <div className="w-3 h-3 rounded-full border-2 border-[#D5006D] bg-white"></div>
          <div className="w-3 h-3 rounded-full border-2 border-[#D5006D] bg-white"></div>
        </div>

      </div>
    </div>
  );
};

export default Categories;
