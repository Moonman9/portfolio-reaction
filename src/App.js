import Nav from "./components/Nav/nav";
import Content from "./components/Content/content";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Applications from "./components/Applications/applications";
import Skills from "./components/Skills/skills"
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { useState } from "react";
import "./App.scss";

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="App">
      <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Content openMenu={openMenu} setOpenMenu={setOpenMenu}/>
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
