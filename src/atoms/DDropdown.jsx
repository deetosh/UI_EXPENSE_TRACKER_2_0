import React,{useState} from 'react'
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon

function DDropdown({name,data}) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(name);

    const toggleDropdown = () => {
        console.log("***");
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    return (
        <div className='dropdown-container'>
            <div className="custom-dropdown" onClick={toggleDropdown}>
                <span>{selected.charAt(0).toUpperCase() + selected.slice(1)}</span>
                <FaChevronDown className="dropdown-icon" />
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
    )
}

export default DDropdown
