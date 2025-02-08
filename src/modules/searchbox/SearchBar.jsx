import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { callAPI } from '../../services/ApiHelper';

export const SearchBar = ({ setResults, input, setInput }) => { // Receive props
    const fetchData = async (value) => {
        if (!value) {
            setResults([]); // Clear results if input is empty
            return;
        }
        const response = await callAPI('/admin/getusers', 'GET', {}, { user_name : value });

        if (response && response.data) {
            setResults(response.data); // Assuming response.data contains the results
        }
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