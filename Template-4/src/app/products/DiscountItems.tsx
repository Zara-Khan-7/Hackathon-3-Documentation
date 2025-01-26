import Image from 'next/image';

const DiscountItems = () => {
  return (
    <div className="py-12">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Discount Items</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
      
        <div className="flex justify-center">
          <Image
            src="/images/discount sofa.png" 
            alt="Discount Sofa"
            width={1000} 
            height={650} 
            className="object-cover rounded-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/2" 
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItems;
