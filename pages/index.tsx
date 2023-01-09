import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Landing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Feature />
        <About />
        <Pricing />
        <Faq />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
