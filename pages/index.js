import Head from "next/head";

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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Telefony Komórkowe | Robert Kamiński</title>
        <meta
          name="description"
          content="Jesteśmy na rynku już od 2003 roku. U nas kupisz, sprzedasz, zamienisz lub naprawisz telefon. Ponad to, znajdziesz tu wszystko czego potrzebujesz do swojego smartfona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {typeof window !== "undefined" ? (
        <>
          <Navbar />
          <Header />
          <div suppressHydrationWarning={true}>
            {process.browser && <Smartfony />}
          </div>
          <AccessoriesPage />
          <ServicePage />
          <AboutMePage />
          <GeneralInfo />
          <FAQPage />
          <DPD />
          <ContactPage />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
