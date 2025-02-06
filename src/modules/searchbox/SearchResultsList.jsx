import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, onSelect }) => { // Add onSelect prop
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <SearchResult
            result={result.name}
            key={id}
            onSelect={onSelect}  // Pass onSelect down
          />
        );
      })}
    </div>
  );
};