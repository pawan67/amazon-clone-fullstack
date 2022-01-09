import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  rating,
  hasPrime,
  price,
  description,
  category,
  image,
}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => { 
    dispatch(removeFromBasket({ id }))
}
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      hasPrime,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product));
   
  };

  return (
    <div className=" grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className=" mx-5 col-span-3">
        <p>{title}</p>
        <div className=" flex my-2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <AiFillStar key={i} className=" text-xl text-yellow-500" />
            ))}
        </div>
        <p className=" text-xs mt-2 mb-2 line-clamp-3">{description}</p>
        <Currency quantity={price * 74} currency="INR" />
        {hasPrime && (
          <div className=" flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12 mt-2"
              src="icons/prime.png"
              alt="ff"
            />
            <p className=" text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className=" flex justify-self-end justify-center  flex-col space-y-2">
        <button onClick={addItemToBasket} className=" px-5 button ">
          {" "}
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className=" px-5 button ">
          {" "}
          Remove
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
