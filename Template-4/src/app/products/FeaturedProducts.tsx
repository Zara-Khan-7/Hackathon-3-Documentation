import Image from 'next/image';

const FeaturedProducts = () => {
  return (
    <div id='products' className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Featured Products</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">

          <div className="flex justify-center">
            <Image
              src="/images/Featured product (1).png"
              alt="Product 1"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Featured product.png"
              alt="Product 2"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Component 3.png"
              alt="Product 3"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Component 4.png"
              alt="Product 4"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

        </div>

        <div className="flex justify-center mt-4">
          <div className="w-7 h-1 bg-[#D5006D] mx-2"></div>
          <div className="w-7 h-1 bg-pink-300 mx-2"></div>
          <div className="w-7 h-1 bg-pink-300 mx-2"></div>
          <div className="w-7 h-1 bg-pink-300 mx-2"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
