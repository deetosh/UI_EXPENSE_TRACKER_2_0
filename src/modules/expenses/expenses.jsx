import React from 'react'
import DynamicTable from '../../atoms/table'
import { callAPI } from '../../services/ApiHelper'
import { useEffect, useState } from 'react';
import Modal from '../../molecules/Modal';
import ExpenseForm from './addExpense';
import DButton from '../../atoms/DButton';

const columns=["amount","date","description","category","payment_method","Delete","Edit"];
function Expenses() {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchData = async () => {
        const response = await callAPI("/expenses", "GET");
        setData(response.data);
        console.log(response.data);
        
    }

    useEffect(() => {  
        fetchData();
    }, []);

    async function handleSubmit(expense){
        // console.log(expense);
        const response = await callAPI("/expenses/add","POST",expense);
        fetchData();
        setIsModalOpen(false);
        // await callAPI("/expenses","POST",expense).then((response)=>{
        //     // console.log(response);
        //     if(response.status===201){
        //         setData([...data,expense]);
        //     }
        // }
        // );
        console.log(response);
    }

    return (
        <>
        <h1>Expenses</h1>
        <DButton
            text={"Add Expense"}
            onClick={()=>setIsModalOpen(!isModalOpen)}
            buttonClass={"button-primary"}
        />
        <DynamicTable 
            columns={columns}
            data={data}    
        />  

        <Modal 
            openModal={isModalOpen}
            setOpenModal={setIsModalOpen}
            height={"80vh"}
            width={"50vw"}
            modalName={"Add Expense"}
        > 
           <ExpenseForm onAddExpense={handleSubmit}/> 
        </Modal>     
        </>
    )
}

export default Expenses
