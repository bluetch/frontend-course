import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components';
import { Toast, ToastProvider } from "./components/providers/Toast";
import { Home } from "./pages/home";
import { Example } from "./pages/example";
import { Register } from "./pages/register";
import './styles/global.scss';

const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Header />
        <Toast />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/example" element={<Example />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
