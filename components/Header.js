import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  return (
    <header>
      <div className=" flex-col sm:flex-row sm:justify-between items-start sm:items-center px-1 flex-grow py-2  flex  bg-amazon_blue">
        <div className=" w-[100px] h-[40px] mt-2 flex items-center justify-center flex-grow sm:flex-grow-0">
          <img
            src="/icons/ampng.png"
            layout="responsive"
            // objectFit="contain"
            className=" ml-3 sm:ml-10 w-full hover:cursor-pointer"
          />
        </div>
        {/* input and search */}
        <div className=" justify-between w-[95%] mx-auto sm:w-[70%] rounded-md sm:mx-10  bg-white flex">
          <input
            className="  w-64 sm:min-w-full px-3 outline-none rounded-tl-md rounded-bl-md"
            type="text"
          />
          <div className=" text-xl font-bold p-3 rounded-tr-md rounded-br-md bg-[#f3a847]">
            <AiOutlineSearch />
          </div>
        </div>
        {/* right */}
        <div className=" ml-3 mt-3 sm:mt-0 relative  flex items-center text-sm sm:mx-6 space-x-6  text-white">
          <div className=" link">
            <p className=" font-extrabold">Hello Pawan Tamada</p>
            <p>Account & lists</p>
          </div>
          <div className=" link">
            <p className=" font-extrabold">Returns</p>
            <p>& Orders</p>
          </div>
         

          <div className="  relative flex items-center link">
            <RiShoppingCart2Line className=" ml-14 sm:ml-0 text-4xl"/>
            <p className="  font-extrabold hidden sm:block mt-2 ">Basket</p>
            <span className=" h-5 w-5 flex justify-center items-center absolute top-0 right-0 sm:right-10  rounded-full text-center font-bold text-black  bg-[#f3a847]">0</span>
          </div>
         
        </div>
       
      </div>
       {/* bootom nav */}
       <div className=" pl-3  h-10 space-x-3 sm:pl-6 flex items-center text-white text-sm bg-amazon_blue-light">
          <p className=" flex ">
            <GiHamburgerMenu className="  mr-3 inline-block  text-white text-xl"/>
             All
          </p>
          <p className=" link"> Prime Video </p>
          <p className=" link"> Amazon Business </p>
          <p className=" link hidden sm:inline"> Electronics </p>
          <p className=" link hidden sm:inline"> Buy Again </p>
          <p className=" link hidden sm:inline"> Shopper Toolkit </p>
          <p className=" link hidden sm:inline"> Health & Personal Care </p>
        </div>
    </header>
  );
}

export default Header;
