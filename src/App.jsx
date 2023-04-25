import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import NotFound from "./pages/notfound/notfound";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Modules from "./pages/modules/modules";
import About from "./pages/about/about";
import Organizations from "./pages/organizations/org";
import Contact from "./pages/contact/contact";
import DataScience from "./courses/data_science/science";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/modules" element={<Modules />}></Route>

        <Route path="/modules/data_science" element={<DataScience />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Organizations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
