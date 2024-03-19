import { Container } from "react-bootstrap";
import "./App.css";
import { SelectColor } from "./components/SelectColor";
import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [nombreColorIngresado, setNombreColorIngresado] = useState("");
  const [colorSeleccionado, setColorSeleccionado] = useState("#0000ff");
  const [colores, setColores] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setNombreColorIngresado(input);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setColorSeleccionado(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    if (nombreColorIngresado.length >= 3) {
      if (!verificarNombre()){
        alert("Color agregado correctamente");
        guardarColor();
        setNombreColorIngresado("");
  
        setColorSeleccionado("#0000ff");
      } else {
        alert("Ese color ya fue ingresado")
      }
      
    } else {
      alert("Ingresa un nombre de color válido");
    }
  };

  const handleErase = (objetoColor) => {
    const coloresFiltrados = colores.filter((color) => color.nombre !== objetoColor.nombre)
    setColores(coloresFiltrados)
  }

  const guardarColor = () => {
    const color = {
      nombre: nombreColorIngresado,
      color: colorSeleccionado,
    };

    setColores([...colores, color]);
  };

  const verificarNombre = () => {
    const nombreFiltrado = colores.filter((color) => color.nombre === nombreColorIngresado)

    if (nombreFiltrado.length > 0){
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <main className="py-5">
        <Container
          fluid
          className="d-flex flex-column align-items-center p-0 p-md-2"
        >
          <SelectColor
            className="mb-3"
            handleChange={handleChange}
            handleColorChange={handleColorChange}
            handleSubmit={handleSubmit}
            valueNombre={nombreColorIngresado}
            valueColor={colorSeleccionado}
          />

          {colores.length > 0 ? (
            <section className="d-flex w-75">
              <div className="d-flex flex-wrap">
                {colores.map((color, i) => (
                  <div className="my-4 me-3 d-flex" key={i}>
                    <Card className="mt-3" color={color} handleErase={handleErase} />
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <>
              <p className="mt-3">No se agregaron colores todavia.</p>
            </>
          )}
        </Container>
      </main>
    </>
  );
}

export default App;
