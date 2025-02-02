import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DButton from './atoms/DButton'
import AuthPage from './modules/auth/authPage'
import TableExample from './atoms/testable'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* <div style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
        minWidth:"100vw",
      }}>
        <DButton
          text="toggle theme"
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
      </div> */}
      <TableExample/>
    </>
  )
}

export default App
