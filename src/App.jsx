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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/modules" element={<Modules />}>
          <Route path="data_science" />
          <Route path="data_analysis" />
          <Route path="advanced_excel" />
          <Route path="stata_spss" />
          <Route path="backend_development" />
          <Route path="frontend_development" />
        </Route>
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
