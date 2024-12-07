import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Footer";
import Japan from "./pages/Japan";
import Brunswick from "./pages/Brunswick";
import AtHome from "./pages/AtHome";

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Layout />}>
        <Route index element={<Brunswick />} />
        <Route path="athome" element={<AtHome />} />
        <Route path="brunswick" element={<Brunswick />} />
        <Route path="japan" element={<Japan />} /> 
        </Route>      
      </Routes>
    </BrowserRouter>
   
  );
};

export default App
