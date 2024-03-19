import { Button } from "react-bootstrap";

export const Card = ({ color, handleErase }) => {
  return (
    <>
      <div className="cardColor shadow-lg">
        <h5 className="p-2">{color.nombre}</h5>
        <div className="cardBody py-3 d-flex justify-content-center">
          <div
            className="cardColorMuestra"
            style={{ backgroundColor: color.color }}
          ></div>
        </div>
        <div className="cardFooter p-2 text-end">
          <Button variant="danger" onClick={() => handleErase(color)}>Borrar</Button>
        </div>
      </div>
    </>
  );
};
