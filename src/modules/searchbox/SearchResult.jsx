import "./SearchResult.css";

export const SearchResult = ({ result, onSelect }) => { // Add onSelect prop
    return (
        <div
            className="search-result"
            onClick={() => onSelect(result)}  // Use the onSelect prop
        >
            {result}
        </div>
    );
};