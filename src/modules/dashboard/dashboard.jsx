import React from 'react';
import ExpenseCard from '../expenses/ExpenseCard';
import Graph from '../graph/Graph';

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

    // Calculate the total spent by summing up the 'spent' field from all expenses
    const totalSpent = expensesData.reduce((total, expense) => total + expense.spent, 0);

    return (
        <>
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                height: "40%",
                width: "100%",
            }
            }>
                <Graph />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                    padding: "20px",
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
                        boxSizing: "border-box"
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
