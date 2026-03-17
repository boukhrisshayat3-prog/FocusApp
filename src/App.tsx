import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Team from "./pages/Team";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-slate-900 p-4 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter">
          Focus <span className="text-indigo-400">App</span>
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-indigo-300">
            Inicio
          </Link>
          <Link to="/precios" className="hover:text-indigo-300">
            Precios
          </Link>
          <Link to="/equipo" className="hover:text-indigo-300">
            Equipo
          </Link>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* Fuera de los routes */}
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        {/* Aquí irían los Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precios" element={<Prices />} />
          <Route path="/equipo" element={<Team />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
