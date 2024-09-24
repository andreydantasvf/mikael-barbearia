import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { HomePage } from "../components/Home";
import { Localization } from "../components/Localization";
import { Scheduling } from "../components/Scheduling";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <HomePage />
        <Services />
        <Localization />
        <Scheduling />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
