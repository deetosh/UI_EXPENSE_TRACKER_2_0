import React from 'react';
import ExpenseCard from '../expenses/ExpenseCard';
import MyLineChart from '../graph/Graph';
import MyPieChart from '../graph/Chart';

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

    const data = [
        {
            date: "2021-09-01",
            amount: 100,
        },
        {
            date: "2021-09-02",
            amount: 200,
        },
        {
            date: "2021-09-03",
            amount: 100,
        },
        {
            date: "2021-09-04",
            amount: 200,
        },
        {
            date: "2021-09-05",
            amount: 300,
        },
        {
            date: "2021-09-06",
            amount: 400,
        },
        {
            date: "2021-09-07",
            amount: 500,
        }
    ];


    const piedata = [
        { name: 'Used', value: 400 },
        { name: 'Remaining', value: 300 },
    ];

    // Calculate the total spent by summing up the 'spent' field from all expenses
    const totalSpent = expensesData.reduce((total, expense) => total + expense.spent, 0);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "50%",
                    width: "100%",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    // overflow:"scroll",
                    gap: "20px",
                }
                }>
                <div style={{
                    width: "70%",
                    height: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                    // overflow:"scroll",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.22)",
                }}>
                    <MyLineChart
                        dataObjects={data}
                    />
                </div>
                <div style={{
                    width: "30%",
                    height: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.22)",
                }}
                >
                    <MyPieChart
                        dataObjects={piedata}
                    />
                </div>


            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "50%",
                    width: "100%",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    // overflow:"scroll",
                    gap: "20px",
                }
                }>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        width: "70%",
                        // padding: "10px",
                        boxSizing: "border-box"
                    }}
                >
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
                <div style={{
                    width: "30%",
                    height: "100%",
                    // padding: "20px",
                    boxSizing: "border-box",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.22)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                    <MyPieChart
                        dataObjects={piedata}
                    />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
