import "./App.css";
import Contact from "./companents/contact/contact";
import Footer from "./companents/footer/footer";
import Header from "./companents/header/header";
import Hero from "./companents/Hero/Hero";
import Tip from "./companents/Tip/Tip";
import Us from "./components/Us/Us";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Tip />
      <Us />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
