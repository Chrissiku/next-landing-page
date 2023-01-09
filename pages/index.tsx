import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Landing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />

      <main>Main page content</main>
      <Footer />
    </div>
  );
};

export default Home;
