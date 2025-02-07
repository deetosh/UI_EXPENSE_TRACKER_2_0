import { useEffect, useState } from 'react';
import "./admin.css";
import { SearchBar } from "../searchbox/SearchBar";
import { SearchResultsList } from "../searchbox/SearchResultsList";
import DDialogbox from "../../molecules/DDialogbox";
import Loader from '../../molecules/Loader';
import { callAPI } from '../../services/ApiHelper'

function Admin() {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState(""); // Add input state here
    const [isLoading, setIsLoading] = useState(true);

    

    const fetchData = async () => {
        setIsLoading(true);
        const response = await callAPI("/expenses", "POST");
        console.log(response.data);
        setIsLoading(false);
    }
    useEffect(() => {  
        fetchData();
    }, []);

    async function handleResultSelect(selectedName){
        setIsLoading(true);
        const response = await callAPI("/expenses/add","POST");
        setInput(selectedName);
        fetchData();
        setResults([]);
        setIsLoading(false);
    }
    
    if(isLoading){
        return <Loader/>
    }

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