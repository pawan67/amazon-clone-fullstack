import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
//AiFillStar
import { AiFillStar } from "react-icons/ai";
function Product({ title, id, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1) + 1));
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className=" rounded-sm relative flex flex-col m-5 bg-white z-30 p-10">
      <p className=" absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img className=" mx-auto w-[200px]" src={image} />
      <h4 className=" my-3">{title}</h4>
      <div className=" flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar className=" text-[#f3a847]" />
          ))}
      </div>
      <p className=" text-xs my-2 line-clamp-2 ">{description}</p>
      <div>
        <Currency quantity={price} currency="INR" />
      </div>
      {hasPrime && (
        <div className=" flex  items-center mt-5 space-x-2 ">
          <img className=" w-10" src="icons/prime.png" alt="" />
          <p className=" -mt-3 text-xs">Free 1 Day Delivery </p>
        </div>
      )}
      <button className=" mt-auto button ">Add to basket</button>
    </div>
  );
}

export default Product;
