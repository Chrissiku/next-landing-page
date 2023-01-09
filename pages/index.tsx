import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Landing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>Main page content</main>
      <Footer />
    </div>
  );
};

export default Home;
