import { Header } from "./components/Header";
import { HomePage } from "./components/Home";
import { Localization } from "./components/Localization";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <HomePage />
        <Services />
        <Localization />
      </main>
    </>
  );
}
