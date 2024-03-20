const COLORES_URL = import.meta.env.VITE_API_COLORES;
const COLOR_URL = import.meta.env.VITE_API_COLOR;

export const leerColores = async () => {
    try {
        const respuesta = await fetch(`${COLORES_URL}`)
        const listarColores = await respuesta.json()
        return listarColores
    } catch (error){
        console.log(error)
    }
}

export const crearColor = async (color) => {
    try {
        const respuesta = await fetch(`${COLORES_URL}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(color)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}