import React, { useState, useEffect } from 'react';
import ExpenseCard from '../expenses/ExpenseCard';
import Graph from '../graph/Graph';
import { callAPI } from '../../services/ApiHelper';

function Dashboard() {
    // Sample expense data with id and spent
    const expensesData = [
        { id: 1, spent: 1400 },
        { id: 2, spent: 960 },
        { id: 3, spent: 2400 },
        { id: 4, spent: 1200 },
        { id: 5, spent: 500 },
        { id: 6, spent: 4000 },
        { id: 7, spent: 4800 },
        { id: 8, spent: 480 }
    ];

    const [graphType, setGraphType] = useState('daily');
    const [graphData, setGraphData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Calculate the total spent by summing up the 'spent' field from all expenses
    const totalSpent = expensesData.reduce((total, expense) => total + expense.spent, 0);

    const fetchGraphData = async () => {

        const response = await callAPI('/expenses/daily', 'GET', {}, { type: graphType });
        if (response.data && response.data.length > 0) {
            setGraphData(response.data);
        }
    }

    useEffect(() => {
        fetchGraphData();
    }, [graphType]);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "40%",
                    width: "100%",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "scroll",
                    gap: "20px",
                }
                }>
                <div style={{
                    width: "50%",
                    height: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                    overflow: "scroll",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.22)",
                }}> 
                    {/* <Graph /> */}
                </div>
                <div style={{
                    width: "50%",
                    height: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.22)",
                }}
                >
                </div>


            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "60%",
                    width: "100%",
                    padding: "10px",
                    boxSizing: "border-box"
                }}
            >
                {/* Uncomment if you want to use modal functionality */}
                {/*
        <h1>Dashboard</h1>
        <DButton
          text={"Open Modal"}
          onClick={() => setIsModalOpen(!isModalOpen)}
          buttonClass={"button-primary"}
        />
        <Modal
          openModal={isModalOpen}
          setOpenModal={setIsModalOpen}
          height={"50vh"}
          width={"50vw"}
          modalName={"Modal"}
        />
        */}
                {/* Expenses Grid Container */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px",
                        width: "100%",
                        overflowY: "auto",
                        padding: "20px",
                        height: "60vh",
                        boxSizing: "border-box",
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.22)",
                    }}
                >
                    {expensesData.map(expense => (
                        <ExpenseCard
                            key={expense.id}
                            id={expense.id}
                            spent={expense.spent}
                            percentage={(expense.spent / totalSpent) * 100}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
