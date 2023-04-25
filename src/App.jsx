import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import NotFound from "./pages/notfound/notfound";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Modules from "./pages/modules/modules";
import About from "./pages/about/about";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
