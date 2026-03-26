import type { FC } from "react";

interface PreviousSearchProps {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearch: FC<PreviousSearchProps> = ({
  searches,
  onLabelClicked,
}) => {
  return (
    <div>
      <p className="text-white/40 text-sm text-center tracking-widest mb-2">
        Busquedas previas
      </p>
      <ul className="flex gap-4 text-white items-center justify-center mb-6">
        {searches.map((term) => (
          <li
            className="shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm bg-white/10 border border-white/20 transition-all hover:bg-white/20 cursor-pointer"
            key={term}
            onClick={() => onLabelClicked(term)}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
