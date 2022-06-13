import Nav from "./components/Nav/nav";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Applications from "./components/Applications/applications";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="sections">
        <Home />
        <About />
        <Skills />
        <Applications />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
