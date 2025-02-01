import React from 'react'
import DDropdown from '../../atoms/DDropdown'

function Admin() {
    return (
        <>
        <h1>Admin</h1>
        <DDropdown 
            name="category" 
            data={["Food","Travel","Grocery","Rent","Others"]}
            func={(selected_category)=>console.log("Category Selected: ", selected_category)}
        />
        </>
    )
}

export default Admin;
