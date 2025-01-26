import Image from 'next/image';

const OfferProducts = () => {
  return (
    <div id="shop" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">What Shopex Offer!</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">

            <div className="flex justify-center relative">
              <Image
                src="/images/what shopex offer.png"
                alt="Product 1"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/car.png.png"
                  alt="Center Image 1"
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            <div className="flex justify-center relative">
              <Image
                src="/images/what shopex offer.png"
                alt="Product 2"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/hand.png"
                  alt="Center Image 2"
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            <div className="flex justify-center relative">
              <Image
                src="/images/what shopex offer.png"
                alt="Product 3"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/medal.png"
                  alt="Center Image 3"
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            <div className="flex justify-center relative">
              <Image
                src="/images/what shopex offer.png"
                alt="Product 4"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/time.png"
                  alt="Center Image 4"
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProducts;
