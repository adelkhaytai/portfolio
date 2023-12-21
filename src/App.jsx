import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Page d'accueil">
        <Navbar />
        <Hero />
      </section>
      <section id="">
        <Parallax type="services" />
      </section>
      <section id="Prestations de service">
        {" "}
        <Services />
      </section>
      <section id="Portefeuille">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
       <section id="contact">
        <Contact type="contact"/>
       </section>
       <section id="Sur moi & resumé">
        <About/>
       </section>
       
    </div>
  );
};

export default App;
