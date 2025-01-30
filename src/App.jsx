import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DButton from './atoms/DButton'
import { callAPI } from './services/ApiHelper'
import AuthPage from './modules/auth/authPage'
import TableExample from './atoms/testable'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const signIn=async ()=>{
    const email_="aashray_tandon@gmail.com";
    const password_="Test@1234";
    const user={
      email:email_,
      password:password_
    }
    const response = await callAPI("/signin","POST",user);
    console.log(response);
  }
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  return (
    <>
      <div style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
        maxWidth:"80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {/* <DButton
          text="toggle theme"
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
      </div> */}
      <TableExample/>
      {/* <AuthPage/> */}
      </div>
    </>
  )
}

export default App
