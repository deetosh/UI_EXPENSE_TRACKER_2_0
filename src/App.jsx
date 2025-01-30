import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DButton from './atoms/DButton'
import { callAPI } from './services/ApiHelper'
import AuthPage from './modules/auth/authPage'
import TableExample from './atoms/testable'
import Navbar from './modules/navbar/navbar'
import { Outlet } from 'react-router-dom'

const tabs = [
  { label: "Dashboard", icon: 1, link: "dashboard" },
  { label: "Admin", icon: 1, link: "admin" },
];

function App() {

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

  return (
    <>
      <div style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
        minWidth:"100vw",
        display: "flex",
      }}>

        <div>
          <Navbar tabs={tabs}/>
        </div>

        <div>
          <Outlet/>
        </div>
      
      
      </div>
    </>
  )
}

export default App
