import { Header } from "./gifs/components/Header";
import { Search } from "./gifs/components/Search";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { GifList } from "./gifs/components/gifs/GifList";
import { useState } from "react";

import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousTerms, setpreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log("Termino clicked:", term);
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
  };

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="absolute"
          style={{
            background:
              "linear-gradient(135deg, #07000F 0%, #0D001A 50%, #050010 100%)",
            width: "100%",
            height: "auto",
          }}
        >
          {/*Header*/}
          <div>
            {Header({
              title: "Gifs",
              description: "busca · descubre · comparte",
            })}
          </div>

          {/*Search*/}
          <Search
            placeholder="Busca el gif que necesitas.."
            onQuery={handleSearch}
          />

          {/*Búsquedas previas*/}
          <div>
            <PreviousSearch
              searches={previousTerms}
              onLabelClicked={handleTermClicked}
            />
          </div>

          {/*Gifs*/}
          <div>
            <GifList gifs={gifs} />
          </div>
        </div>
      </div>
    </>
  );
};
