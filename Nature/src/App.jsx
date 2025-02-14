import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Japan from "./pages/Japan";
import Brunswick from "./pages/Brunswick";
import Hawaii from "./pages/Hawaii";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hawaii" element={<Hawaii />} />
        <Route path="/brunswick" element={<Brunswick />} />
        <Route path="/japan" element={<Japan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
