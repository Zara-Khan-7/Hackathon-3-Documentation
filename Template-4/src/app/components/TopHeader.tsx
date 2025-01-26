import { CiHeart } from 'react-icons/ci';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { LuShoppingCart } from "react-icons/lu";

const TopHeader = () => {
  return (
    <div className="bg-violet-600 text-white text-sm py-2">
      <div className="justify-between items-center sm:flex-row max-w-6xl mx-auto  px-6 sm:px-10 flex flex-col ">
        
        <div className="space-x-6 items-center  mb-2 sm:mb-0 flex">
          <div className="flex space-x-2 items-center ">
            <FaEnvelope />
            <span>zaara.khan1795.zy@gmail.com</span>
          </div>
          <div className="flex space-x-2 items-center ">
            <FaPhoneAlt />
            <span>+92 334 3677318</span>
          </div>
        </div>

      
        <div className="space-x-8 items-center flex  ">
         
          <div className="flex cursor-pointer items-center space-x-1 ">
            <span>English</span>
            <MdKeyboardArrowDown />
          </div>
        
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>USD</span>
            <MdKeyboardArrowDown />
          </div>
         
          <div className=" items-center space-x-6 flex text-3xl">
            <div className=" space-x-2 items-center  cursor-pointer flex">
              <FaUser />
              <span>Login</span>
            </div>

            <div className=" space-x-2 items-center cursor-pointer flex">
              <span>Wishlist</span>
              <CiHeart className="cursor-pointer" />
            </div>
            
            
            <LuShoppingCart className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
