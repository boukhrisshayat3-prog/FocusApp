import { useState } from "react";
import PriceCard from "../components/PriceCard/PriceCard";

const Prices = () => {
  // Para controlar el cambio entre mensual y anual
  const [isAnual, setIsAnual] = useState(false);
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Planes</h1>
      {/* Boton para cambiar entre mensual y anual */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <span
          className={`font-medium ${isAnual ? "text-indigo-600" : "text-gray-500"}`}
        >
          Mensual
        </span>
        <button
          className="w-14 h-8 bg-indigo-200 rounded-full relative transition-colors"
          onClick={() => setIsAnual(!isAnual)}
        >
          <div
            className={`w-6 h-6 bg-indigo-600 rounded-full absolute top-1 transition-all ${isAnual ? "right-1" : "left-1"}`}
          ></div>
        </button>
        <span
          className={`font-medium ${isAnual ? "text-gray-500" : "text-indigo-600"}`}
        >
          Anual(20% off)
        </span>
      </div>
      {/* Grid de tarjetas de precios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PriceCard plan="Plan Basico" price={9} isAnual={isAnual} />
        <PriceCard plan="Plan Pro" price={19} isAnual={isAnual} />
      </div>
    </div>
  );
};

export default Prices;
