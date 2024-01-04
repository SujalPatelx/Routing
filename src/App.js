import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./styles/nav.css";
import "./styles/style.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/contact.css";
import "./styles/mediaquery.css";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
