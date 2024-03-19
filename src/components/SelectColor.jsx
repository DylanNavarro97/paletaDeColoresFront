import { Button, FormControl } from "react-bootstrap";

export const SelectColor = ({handleChange, handleColorChange, handleSubmit, valueNombre, valueColor}) => {
  return (
    <div className="shadow-sm w-75">
      <div className="p-3 shadow-sm">
        <h5>Administrar colores</h5>
      </div>

      <div>
        <form onSubmit={handleSubmit}>

          <section className="inputColorContainer d-flex flex-column flex-md-row align-items-center py-4 px-md-5">
            <div className="inputColorDiv mb-3 me-md-5">
              <input
                type="color"
                name="selectColor"
                id="selectColor"
                onChange={handleColorChange}
                value={valueColor}
              />
            </div>
            <div className="inputTextColor">
              <FormControl className="py-2" placeholder="Ingrese un color ej Blue" onChange={handleChange} value={valueNombre} required minLength={3} maxLength={20}/>
            </div>
          </section>

          <section className="p-4 d-flex justify-content-end shadow-sm">
            <Button type="submit">Guardar</Button>
          </section>
        </form>
      </div>
    </div>
  );
};
