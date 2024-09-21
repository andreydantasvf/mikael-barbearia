import { Header } from "./components/Header";
import { HomePage } from "./components/Home";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <HomePage />
      </main>
    </>
  );
}
