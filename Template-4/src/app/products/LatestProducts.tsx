import Image from 'next/image';

const LatestProducts = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Latest Products</h2>
      </div>

      <div className="text-center mb-8">
        <nav>
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="/products" className="text-pink-500 border-b-2 border-pink-500">New Arrival</a>
            </li>
            <li>
              <a href="/shoplist" className="text-blue-500">Best Seller</a>
            </li>
            <li>
              <a href="/products" className="text-blue-500">Featured</a>
            </li>
            <li>
              <a href="/shoplist" className="text-blue-500">Special Offer</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-16">

          <div className="flex justify-center">
            <Image
              src="/images/Component 9.png"
              alt="Product 1"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Leatest product.png"
              alt="Product 2"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Component 8.png"
              alt="Product 3"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-16">

          <div className="flex justify-center">
            <Image
              src="/images/Component 10.png"
              alt="Product 4"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Component 11.png"
              alt="Product 5"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Component 12.png"
              alt="Product 6"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
