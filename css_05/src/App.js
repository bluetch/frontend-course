import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components';
import { Products } from "./pages/products";
import { Home } from "./pages/home";
import './styles/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;