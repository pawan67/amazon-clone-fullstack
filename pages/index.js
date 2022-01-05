import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 font-nunito w-screen">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&display=swap');
        </style>
        <title>
          Online Shopping site in India: Shop Online for Mobiles, Books,
          Watches, Shoes and More - Amazon.in
        </title>
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <Header />
      <main className=" w-screen bg-gray-100 sm:max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
