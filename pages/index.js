import Head from "next/head";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Smartfony from "../components/SmartfonyPage";
import AccessoriesPage from "../components/AccessoriesPage";
import ServicePage from "../components/ServicePage";
import AboutMePage from "../components/AboutMePage";
import GeneralInfo from "../components/GeneralInfo";
import FAQPage from "../components/FAQPage";
import DPD from "../components/DPD";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Home({ thumbnails }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>Telefony Komórkowe | Robert Kamiński</title>
        <meta
          name="description"
          content="Jesteśmy na rynku już od 2003 roku. U nas kupisz, sprzedasz, zamienisz lub naprawisz telefon. Ponad to, znajdziesz tu wszystko czego potrzebujesz do swojego smartfona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="GRMdcoFs-83heCcyahrWtFvJ0Qg5z4ANC5q6YeHolQc"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>

      {isLoading && <Loader />}

      <Navbar />
      <Header />
      <Smartfony />
      <AccessoriesPage />
      <ServicePage />
      <AboutMePage />
      <GeneralInfo />
      <FAQPage />
      <DPD />
      <ContactPage />
      {thumbnails && <Footer thumbnails={thumbnails} />}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://data.focuseye.pl/wp-json/wp/v2/media?media_folder=59&per_page=100"
  );
  const data = await response.json();
  const thumbnails = data.map((image) => {
    const smallImg = image.media_details.sizes.full.source_url;
    return smallImg;
  });

  return {
    props: {
      thumbnails,
    },
  };
}
