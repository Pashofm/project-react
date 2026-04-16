import { Routes, Route } from "react-router-dom";
import Acerca from "./pages/Acerca";
import Tablas from "./pages/Tablas";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tablas" element={<Tablas />} />
      </Routes>
    </>
  );
}

export default App;
