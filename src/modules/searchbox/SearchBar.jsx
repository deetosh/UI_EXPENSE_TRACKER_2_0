import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults, input, setInput }) => { // Receive props
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value.toLowerCase())
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value); // Use prop setter instead of local state
        fetchData(value);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Type to search..."
                value={input}  // Use prop value
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};