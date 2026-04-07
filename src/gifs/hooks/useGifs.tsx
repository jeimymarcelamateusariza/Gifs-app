import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setpreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    console.log("Termino clicked:", term);
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    //validar que el query no este vacio
    if (query.length === 0) return;

    //Evitar búsquedas duplicadas en el historial
    if (previousTerms.includes(query)) return;

    //Actualizar previousTerms con el nuevo término y limitarlo a 7 términos
    setpreviousTerms([query, ...previousTerms].slice(0, 6));

    await getGifsByQuery(query);

    const gifs = await getGifsByQuery(query);

    console.log({ gifs });
    setGifs(gifs);

    gifsCache.current[query] = gifs; // Almacenar en cache
  };

  return {
    gifs,
    previousTerms,
    handleTermClicked,
    handleSearch,
  };
};
