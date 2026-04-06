import { Header } from "./gifs/components/Header";
import { Search } from "./gifs/components/Search";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { GifList } from "./gifs/components/gifs/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs();

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
