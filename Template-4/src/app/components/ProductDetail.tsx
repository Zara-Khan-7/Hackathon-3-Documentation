'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { client } from '../../sanity/lib/client'; // Adjust path as needed
import Header from './Header';
import Footer from './Footer';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type Product = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
  additionalImages: string[];
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
   const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `
        *[_type == "product" && _id == "${id}"] {
          _id,
          name,
          "imageUrl": image.asset->url,
          price,
          description,
          discountPercentage,
          stockLevel,
          "additionalImages": additionalImages[].asset->url
        }[0]
      `;

      const latestQuery = `
        *[_type == "product"] | order(_createdAt desc)[0...10] {
          _id,
          name,
          "imageUrl": image.asset->url,
          price
        }
      `;

      try {
        const [productData, latestProductsData] = await Promise.all([
          client.fetch(query),
          client.fetch(latestQuery),
        ]);
        setProduct(productData);
        setLatestProducts(latestProductsData);
        setCurrentImage(productData?.imageUrl);
      } catch (error) {
        console.error('Error fetching product details:', error);
        toast.error('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <p>Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  const incrementQuantity = () => {
    if (quantity < product.stockLevel) {
      setQuantity(quantity + 1);
    } else {
      toast.error('Quantity exceeds stock level.');
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleWishlistClick = (productId: string) => {
    toast.info('Added to Wishlist!');
    console.log(`Product ${productId} added to wishlist.`);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const goToProductDetail = (id: string) => {
    router.push(`/productdetail/${id}`);
  };

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto p-4">
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images Section */}
          <div>
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {[product.imageUrl, ...(product.additionalImages || [])].map(
                  (img, index) => (
                    <div
                      key={index}
                      className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer ${
                        currentImage === img ? 'border-2 border-blue-500' : ''
                      }`}
                      onClick={() => setCurrentImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Angle ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  )
                )}
                {[product.imageUrl, ...(product.additionalImages || [])].map(
                  (img, index) => (
                    <div
                      key={index}
                      className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer ${
                        currentImage === img ? 'border-2 border-blue-500' : ''
                      }`}
                      onClick={() => setCurrentImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Angle ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  )
                )}
                {[product.imageUrl, ...(product.additionalImages || [])].map(
                  (img, index) => (
                    <div
                      key={index}
                      className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer ${
                        currentImage === img ? 'border-2 border-blue-500' : ''
                      }`}
                      onClick={() => setCurrentImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Angle ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  )
                )}
                {[product.imageUrl, ...(product.additionalImages || [])].map(
                  (img, index) => (
                    <div
                      key={index}
                      className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer ${
                        currentImage === img ? 'border-2 border-blue-500' : ''
                      }`}
                      onClick={() => setCurrentImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Angle ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  )
                )}
                {[product.imageUrl, ...(product.additionalImages || [])].map(
                  (img, index) => (
                    <div
                      key={index}
                      className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer ${
                        currentImage === img ? 'border-2 border-blue-500' : ''
                      }`}
                      onClick={() => setCurrentImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Angle ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  )
                )}
              </div>

              {/* Main Image */}
              <div className="relative w-full h-[500px] bg-gray-100">
                <Image
                  src={currentImage || product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mt-4">
              ${product.price}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-lg text-red-500 mt-2">
                Discount: {product.discountPercentage}%
              </p>
            )}
            <p className="text-md text-gray-500 mt-2">
              Stock Level: {product.stockLevel}
            </p>

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                onClick={decrementQuantity}
              >
                -
              </button>
              <p className="text-lg font-semibold">{quantity}</p>
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-6 px-6 py-2 bg-violet-600 text-white rounded hover:bg-violet-800 transition-all"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Latest Products Carousel */}
        <div className="mt-16 w-full h-full">
          <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
          <Slider {...carouselSettings}>
            {latestProducts.map((latest) => (
              <div key={latest._id} className="p-2">
                <div
                  className="relative border rounded-lg overflow-hidden shadow-md cursor-pointer"
                  onClick={() => router.push(`/productdetail/${latest._id}`)}
                >
                  <Image
                    src={latest.imageUrl}
                    alt={latest.name}
                    width={300}
                    height={300}
                    className="w-full h-full"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{latest.name}</h3>
                    <p className="text-green-600 font-bold">${latest.price}</p>
                  </div>
                  <button
                  className="w-full py-2 text-sm bg-violet-500 rounded-none hover:bg-violet-700 transition-colors text-white"
                  onClick={() => goToProductDetail(product._id)}
                            
                >
                  View Details
                </button>
                 {/* Wishlist Icon */}
                    <button
                      className="absolute top-2 right-2 text-red-500 text-2xl hover:text-red-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWishlistClick(latest._id);
                      }}
                    >
                      {wishlist.some((item) => item._id === latest._id) ? (
                        <AiFillHeart />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </button>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
