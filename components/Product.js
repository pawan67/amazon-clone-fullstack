import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
//AiFillStar
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
function Product({ title, id, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1) + 1));
  const [hasPrime] = useState(Math.random() < 0.5);
  const addItemToBasket = () => {
    const product = {
      title,
      id,
      price,
      description,
      category,
      image,
      hasPrime,
      rating
    };
    dispatch(addToBasket(product))
  };
  return (
    <div className=" rounded-md relative  flex flex-col m-5 bg-white z-30 p-10">
      <p className=" absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img className=" mx-auto mb-5 w-[140px] sm:w-[180px] " src={image} />
      <h4 className=" font-semibold  my-3">{title}</h4>
      <div className=" flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar key={i} className=" text-[#f3a847]" />
          ))}
      </div>
      <p className=" text-xs my-2 line-clamp-2 ">{description}</p>
      <div>
        <Currency quantity={price * 74} currency="INR" />
      </div>
      {hasPrime && (
        <div className=" flex  items-center mt-5 space-x-2 ">
          <img className=" w-10" src="icons/prime.png" alt="" />
          <p className=" -mt-3 text-xs">Free 1 Day Delivery </p>
        </div>
      )}
      <button onClick={addItemToBasket} className=" mt-5 button  ">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
