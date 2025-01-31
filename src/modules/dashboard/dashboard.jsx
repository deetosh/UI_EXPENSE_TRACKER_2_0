import React, { useState } from 'react'
import Modal from '../../molecules/Modal'
import DButton from '../../atoms/DButton';
import ExpenseCard from '../expenses/ExpenseCard';
import Loader from '../../molecules/Loader';

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent:"center",
                alignItems: "center",
                height: "100%",
                width: "100%",
            }}>
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
                {/* <Graph_dropdown />
                <Graph /> */}
                <ExpenseCard />
            </div>

        </>
    )
}

export default Dashboard
