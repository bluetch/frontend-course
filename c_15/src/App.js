import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components';
import { Example } from "./pages/example";
import { Register } from "./pages/register";
import './styles/global.scss';

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Example />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;