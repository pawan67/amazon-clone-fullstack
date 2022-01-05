import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className=" grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:-mt-52  ">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <img
        className="relative hidden sm:block  xl:rounded-md md:col-span-full "
        src="images/banner8.jpg"
        alt=""
      />

      <img
        className="relative  sm:hidden  xl:rounded-md md:col-span-full "
        src="images/banner8sm.jpg"
        alt=""
      />

      <div className=" md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      {products
        .slice(5, 9)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      <img
        className="relative md:col-span-2 mt-5 hidden sm:block  xl:rounded-md "
        src="images/banner4sm.jpg"
        alt=""
      />

      
      <img
        className="relative md:col-span-3 hidden sm:block  xl:rounded-md "
        src="images/banner5.jpg"
        alt=""
      />

      <img
        className="relative  sm:hidden  xl:rounded-md md:col-span-full "
        src="images/banner5sm.jpg"
        alt=""
      />
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
