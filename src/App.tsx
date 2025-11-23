import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Empresa } from "./pages/Empresa";
import { Maquinaria } from "./pages/Maquinaria";
import { Repuestos } from "./pages/Repuestos";
import { Servicios } from "./pages/Servicios";
import { Marcas } from "./pages/Marcas";
import { Novedades } from "./pages/Novedades";
import { Contacto } from "./pages/Contacto";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/maquinaria" element={<Maquinaria />} />
          <Route path="/repuestos" element={<Repuestos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
