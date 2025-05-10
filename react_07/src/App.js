import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from './pages/pokemon';
import { Test } from "./pages/test";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
