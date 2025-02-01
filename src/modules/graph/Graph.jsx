import { useState, useEffect } from "react";
import "./Graph.css";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon

const Graph = () => {
    const [timeFrame, setTimeFrame] = useState("weekly");
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

    const fetchExpenses = async (period) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.example.com/expenses/${period}`);
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setExpenses(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchExpenses(timeFrame);
    }, [timeFrame]);

    const handleTimeframeChange = (value) => {
        setTimeFrame(value);
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    return (
        <div className="expense-container">
            <div className="dropdown-container">
                <div className="custom-dropdown" onClick={toggleDropdown}>
                    <span>{timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}</span>
                    <FaChevronDown className="dropdown-icon" /> {/* Dropdown button */}
                </div>

                {/* Custom Dropdown Menu */}
                {isDropdownOpen && (
                    <div className={`custom-dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                        <div
                            className="dropdown-item"
                            onClick={() => handleTimeframeChange("weekly")}
                        >
                            Weekly
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={() => handleTimeframeChange("monthly")}
                        >
                            Monthly
                        </div>
                    </div>
                )}
            </div>

            {isLoading && <div>Loading expenses...</div>}
            {error && <div className="error">Error: {error}</div>}

            {!isLoading && !error && (
                <div className="expenses-list">
                    <h2>{timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)} Expenses</h2>
                    <ul>
                        {expenses.map((expense) => (
                            <li key={expense.id}>
                                {expense.name}: ${expense.amount}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Graph;