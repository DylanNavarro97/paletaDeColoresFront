import { Container } from "react-bootstrap";
import "./App.css";
import { SelectColor } from "./components/SelectColor";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { borrarColor, crearColor, leerColores } from "./helpers/queries";

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

    if (nombreColorIngresado.trim().length >= 3) {
      guardarColor();
      setNombreColorIngresado("");
      setColorSeleccionado("#0000ff");
    } else {
      alert("Ingresa un nombre de color válido");
    }
  };

  const handleErase = async (objetoColor) => {
    try {
      const respuesta = await borrarColor(objetoColor._id)
      if (respuesta.status === 200){
        alert("Color borrado correctamente")
        traerColores()
      }
    } catch (error) {
      console.log(error)
    }
  };

  const guardarColor = async () => {
    const color = {
      nombre: nombreColorIngresado,
      color: colorSeleccionado,
    };

    const respuesta = await crearColor(color);
    if (respuesta.status === 201) {
      setColores([...colores, color]);
      alert("Color agregado correctamente");
    } else {
      alert(respuesta?.mensaje);
    }
  };

  const traerColores = async () => {
    try {
      const respuesta = await leerColores();
      setColores(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerColores();
  }, []);

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
                    <Card
                      className="mt-3"
                      color={color}
                      handleErase={handleErase}
                    />
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
