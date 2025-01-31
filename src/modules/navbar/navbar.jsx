import React ,{useState,useEffect} from 'react';
import './navbar.css';
import DButton from '../../atoms/DButton';
import { Link,NavLink } from 'react-router-dom';

const icon_map = {
    1:"../../../public/icons/dashboard.svg",
    2:"../../../public/icons/expenses.svg",
    3:"../../../public/icons/admin.svg",
    4:"../../../public/icons/admin-white.svg",
    5:"../../../public/icons/expenses-white.svg",
    6:"../../../public/icons/dashboard-white.svg",
}

function Navbar({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
          document.body.setAttribute("data-theme", "dark");
        } else {
          document.body.removeAttribute("data-theme");
        }
      }, [isDarkMode]);

    return (
        <nav className="main-menu">
            <div style={{height:"100px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h1>Trackify</h1>
                <img className="logo" src={icon_map[1]} alt="logo" />
            </div>
            <ul>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <b></b>
                        <b></b>
                        <Link to={tab.link} className='link'>
                            <img src={`${activeIndex === index ? icon_map[index+1] : icon_map[6-index]}`} className={`nav-icon `}></img>
                            <span className="nav-text">{tab.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div style={{
                position: "absolute",
                bottom: "5vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "20px",
            }}>
                <DButton
                    text={isDarkMode ? "Light Mode" : "Dark Mode"}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    buttonClass='button-nav-primary'
                />
                <DButton
                    text = "Sign Out"
                    onClick={()=>{}}
                    buttonClass='button-nav-primary'
                />
            </div>
        </nav>
    );
}

export default Navbar;