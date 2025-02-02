import React from 'react'
import DynamicTable from '../../atoms/table'
import { callAPI } from '../../services/ApiHelper'
import { useEffect, useState } from 'react';
import Modal from '../../molecules/Modal';
import ExpenseForm from './addExpense';
import DButton from '../../atoms/DButton';
import DTable from '../../atoms/table';
import Loader from '../../molecules/Loader';
import FilterForm from './addFilter';

const columns=[
    {
        label:"Date",
        key:"date"
    },
    {
        label:"Amount",
        key:"amount"
    },
    {
        label:"Description",
        key:"description"
    },
    {
        label:"Category",
        key:"category"
    },
    {
        label:"Payment Mode",
        key:"payment_mode"
    }
];
function Expenses() {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await callAPI("/expenses", "POST");
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
    }

    useEffect(() => {  
        fetchData();
    }, []);

    async function handleSubmit(expense){
        // console.log(expense);
        setIsLoading(true);
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
        setIsLoading(false);
    }

    async function handleFilter(filter){
        setIsLoading(true);
        const response = await callAPI("/expenses","POST",filter);
        setData(response.data);
        setIsFilterOpen(false);
        setIsLoading(false);
    }

    const deleteExpense = async (id) => {
        setIsLoading(true);
        const response = await callAPI(`/expenses/delete`, "DELETE",{},{expense_id:id});
        fetchData();
        setIsLoading(false);
    }

    if(isLoading){
        return <Loader/>
    }

    return (
        <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent:"center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: "20px"
        }}>

        
        {/* <h1>Expenses</h1> */}
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "100px",
        }}>
            <DButton
                text={"Add Expense"}
                onClick={()=>setIsModalOpen(!isModalOpen)}
                buttonClass={"button-primary"}
            />
            <DButton
                text={"Filter"}
                onClick={()=>setIsFilterOpen(!isFilterOpen)}
                buttonClass={"button-primary"}
            />
        </div>
        
        <DTable
            headers={columns}
            data={data}
            onDelete={deleteExpense}
        />
        </div>
        <Modal 
            openModal={isModalOpen}
            setOpenModal={setIsModalOpen}
            height={"60vh"}
            width={"30vw"}
            modalName={"Add Expense"}
        > 
           <ExpenseForm onAddExpense={handleSubmit}/> 
        </Modal> 
        <Modal
            openModal={isFilterOpen}
            setOpenModal={setIsFilterOpen}
            height={"60vh"}
            width={"30vw"}
            modalName={"Filter Expenses"}
        >
            <FilterForm onAddFilter={handleFilter}/>
        </Modal>    
        </>
    )
}

export default Expenses
