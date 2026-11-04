import { useState, useEffect } from "react";
import { fetchPersonajes } from "../services/fetchPersonajes";

export function usePersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargar() {
      try {
        const datos = await fetchPersonajes();
        setPersonajes(datos);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los personajes. Revisa tu conexión a internet.");
      } finally {
        setCargando(false); 
      }
    }

    cargar();
  }, []); 

  return { personajes, cargando, error };
}