import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header className="mt-10">Button Text</Header>
        <Hero />
        <Benefits />
        <Collaboration />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
