import React, { useState, useEffect } from 'react';
import ExpenseCard from '../expenses/ExpenseCard';
import MyLineChart from '../graph/Graph';
import MyPieChart from '../graph/Chart';
import { callAPI } from '../../services/ApiHelper';
import DDropdown from '../../atoms/DDropdown';
import DButton from '../../atoms/DButton';
import Loader from '../../molecules/Loader';

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
        { name: 'Remaining', value: 400 },
    ];

    const [graphType, setGraphType] = useState('Present Week');
    const [graphData, setGraphData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categoryData, setCategoryData] = useState({});

    // Calculate the total spent by summing up the 'spent' field from all expenses
    const totalSpent = expensesData.reduce((total, expense) => total + expense.spent, 0);

    const fetchGraphData = async () => {
        setIsLoading(true);
        let graph_type = graphType === 'Present Week' ? 'weekly' : 'monthly';
        const response = await callAPI('/expenses/daily', 'GET', {}, { type: graph_type });
        if (response.data && response.data.length > 0) {
            setGraphData(response.data);
        }
        setIsLoading(false);
    }

    const fetchCategoryData = async () => {
        setIsLoading(true);
        let graph_type = graphType === 'Present Week' ? 'weekly' : 'monthly';
        const response = await callAPI('/expenses/category', 'GET', {},{duration:graph_type});
        if (response.data) {
            console.log('response',response.data);
            setCategoryData(response.data);
        }
        // console.log('category',categoryData);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchGraphData();
        fetchCategoryData();
    }, [graphType]);

    const [showInput, setShowInput] = useState(false);

    const handleBudgetChange = (newBudget) => {
        setShowInput(false);
    }

    if(isLoading){
        return <Loader/>
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "60%",
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
                    backgroundColor: "white",
                    borderRadius: "20px",
                }}>
                    <div style={{
                        height: "15%",
                    }}>
                        <DDropdown
                            name="Present Week"
                            data={["Present Week", "Present Month"]}
                            func={setGraphType}
                        />
                    </div>
                    <div style={{
                        height: "85%",
                    }}>
                    <MyLineChart
                        dataObjects={graphData}
                    />
                    </div>
                </div>
                <div style={{
                    width: "30%",
                    height: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.22)",
                    backgroundColor: "white",
                    borderRadius: "20px",
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
                    height: "40%",
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
                        boxSizing: "border-box",
                        backgroundColor: "white",
                        borderRadius: "20px",
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
                            borderRadius: "20px",
                        }}
                    >
                        {categoryData?.expenses?.length && categoryData.expenses.map(expense => (
                            <ExpenseCard
                                key={expense.category}
                                id={expense.category}
                                spent={expense.amount}
                                percentage={(expense.amount / categoryData.total_amount) * 100}
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
                    backgroundColor: "white",
                    borderRadius: "20px",
                    flexDirection: "column",
                    gap: "5px",
                }}
                >
                  <div style={{
                    height: "10%",
                    width: "100%",
                    textAlign: "left",
                    fontSize: "20px",
                    paddingLeft: "10px",
                    // paddingTop: "5px",
                    fontWeight: "bold",
                  }}>
                  Budget v/s Expense
                  </div>
                  <div style={{
                    // paddingTop: "5px",
                    height: "70%",
                    width: "100%",
                    // padding: "10px",
                  }}>
                    <MyPieChart
                        dataObjects={piedata}
                        //piedata={used, remaining}
                    />
                    </div>
                    <div style={{
                    height: "10%",
                    width: "100%",
                    // textAlign: "centre",
                    // fontSize: "15px",
                    paddingLeft: "10px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    justifyContent: "center",
                  }}>
                  <input
                    className='textbox'
                    placeholder=" New Budget"
                    onInput={()=>{
                        var input = document.getElementsByTagName("input")[0];
                        var val = input.value;
                        val = val.replace(/^0+|[^\d]/g, '');
                        input.value = val;
                    }}
                    onKeyDown={(event)=>{
                        if(event.key === 'Enter'){
                            handleBudgetChange(event.target.value);
                        }
                    }}
                    style={{
                        display: showInput ? 'block' : 'none',
                    }}
                  />
                  <img src="../../../icons/edit.svg" onClick={()=>setShowInput(true)} style={{
                    cursor: "pointer",
                  }}></img>
                  </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
