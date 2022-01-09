import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className=" bg-gray-100">
      <Header />
      <main className=" w-screen bg-gray-100 sm:max-w-screen-2xl mx-auto">
        {/* left */}
        <div className=" flex-grow m-5  shadow-sm">
          <div>
            <img className=" " src="/images/banner10.jpg" alt="" />
          </div>
          <div className=" flex flex-col p-5 space-y-10 bg-white">
            <h1 className=" text-3xl border-b pb-4 bg-white ">
              {items.length === 0
                ? "Your Amazon Basket is empty,"
                : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.rating}
                hasPrime={item.hasPrime}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {/* right */}
        <div>
          {items.length > 0 && (
            <>
            <h2>Subtotal ({items.length} items) : <span>
              {/* <Currency></Currency> */} 334
              </span> </h2>
            </>
          )}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Checkout;
