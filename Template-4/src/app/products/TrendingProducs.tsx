import Image from 'next/image';

const TrendingProducts = () => {
  return (
    <div className="py-12">
   
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Trending Products</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
       
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    
            {[
              '/images/Trending products.png', 
              '/images/Trending products (1).png',
              '/images/Trending products (2).png',
              '/images/Trending products (3).png',
            ].map((src, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={src}
                  alt={`Trending Product ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          
          <div className="grid grid-cols-4 gap-4 mt-4">
           
            <div className="col-span-3 grid grid-cols-2 gap-4">
              <div>
                <Image
                  src="/images/Group 154.png" 
                  alt="Wide Image 1"
                  width={450}
                  height={300}
                  className="object-cover rounded-lg w-full"
                />
              </div>
              <div>
                <Image
                  src="/images/Group 155.png" 
                  alt="Wide Image 2"
                  width={450}
                  height={300}
                  className="object-cover rounded-lg w-full"
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              {[
                '/images/Trnding products list.png', 
                '/images/Trnding products list (1).png',
                '/images/Trnding products list (2).png',
              ].map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Stacked Image ${index + 1}`}
                  width={300}
                  height={100} 
                  className="object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
