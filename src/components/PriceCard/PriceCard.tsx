// RECUERDEN IMPORTAR SU CSS
import "./PriceCard.css";

interface PriceCardProps {
  plan: string;
  price: number;
  isAnual: boolean;
}

const PriceCard = ({ plan, price, isAnual }: PriceCardProps) => {
  // LOGICA SIMPLE SI ES ANUAL MULTIPLICAMOS X10 (2MESES GRATIS)
  const finalPrice = isAnual ? price * 10 : price;
  return (
    <div className="card-price">
      <h3 className="price-title">{plan}</h3>
      <p className="price-amount">{finalPrice}</p>
      <p style={{ color: "#6474b" }}>
        {isAnual ? "Facturado anualmente" : "Facturado mes a mes"}
      </p>
      {/* Realizamos boton con una mezcla de CSS */}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Elegir Plan
      </button>
    </div>
  );
};

export default PriceCard;
