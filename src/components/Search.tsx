import { useEffect, useState, type KeyboardEvent } from "react";
interface SearchProps {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const Search = ({ placeholder = "Buscar...", onQuery }: SearchProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-[90%] max-w-3xl mx-auto p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-green-400 my-8">
      <div className="flex items-center bg-[#14062e] rounded-full px-6 py-3">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500 text-lg placeholder:text-gray-400"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
