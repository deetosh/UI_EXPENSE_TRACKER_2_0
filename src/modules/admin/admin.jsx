import { useState } from "react";
import "./admin.css";
import { SearchBar } from "../searchbox/SearchBar";
import { SearchResultsList } from "../searchbox/SearchResultsList";
import DDialogbox from "../../molecules/DDialogbox";

function Admin() {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState(""); // Add input state here

    const handleResultSelect = (selectedName) => {
        setInput(selectedName); // Update the input state
        setResults([]); // Clear the results
    };

    return (
        <div className="Admin">
            <div className="search-bar-container">
                <SearchBar 
                    setResults={setResults} 
                    input={input}  // Pass input state down
                    setInput={setInput}  // Pass setter down
                />
                {results && results.length > 0 && (
                    <SearchResultsList 
                        results={results} 
                        onSelect={handleResultSelect}  // Pass handler
                    />
                )}
            </div>
        </div>
    );
}

export default Admin;