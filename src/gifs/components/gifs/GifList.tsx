import type { FC } from "react";
// import type { Gif } from "../../mock-data/gifs.mock";
import type { Gif } from "../../interfaces/gif.interface";

interface GifListProps {
  gifs: Gif[];
}

export const GifList: FC<GifListProps> = ({ gifs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {gifs.map((gif) => {
        return (
          <div
            key={gif.id}
            className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-400 max-w-[300px] mx-auto"
          >
            <div className="bg-black/90 rounded-2xl p-4 h-full flex flex-col gap-2">
              <img
                src={gif.url}
                alt={gif.title}
                className="rounded-xl object-cover h-[150px] w-[250px] mx-auto"
              />
              <h3 className="font-semibold text-gray-200">{gif.title}</h3>
              <p className="text-sm text-gray-400">
                {gif.width} x {gif.height}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
