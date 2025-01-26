import Image from 'next/image';

const Blogs = () => {
  return (
    <div id="LatestBlog" className="py-12">
    
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Latest Blog</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">

          <div className="flex justify-center">
            <Image
              src="/images/Leatest blog.png" 
              alt="Product 1"
              width={300} 
              height={300} 
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Leatest blog (1).png" 
              alt="Product 2"
              width={300} 
              height={300} 
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Leatest blog (2).png" 
              alt="Product 3"
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

export default Blogs;
