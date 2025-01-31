import React, { useState } from 'react';
import DButton from '../../atoms/DButton';
import './addExpense.css';
const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const categories = [
    'utility',
    'insurance',
    'bank_fees',
    'rent',
    'taxes',
    'repair',
    'gifts',
    'shopping',
    'interest',
    'travel',
    'food',
    'health',
    'others'
  ];

  const paymentModes = [
    'cash',
    'credit/debit cards',
    'UPI',
    'cheque',
    'digital wallets',
    'NET banking',
    'EMI'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      amount: parseInt(amount),
      date:date,
      description:description,
      category:category,
      payment_mode:paymentMode
    };
    
    onAddExpense(expense);
    
    // Reset form
    setAmount('');
    setDate('');
    setDescription('');
    setCategory('');
    setPaymentMode('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"20px",
    }}>
      <div className="form-group">
        <label htmlFor="amount" id="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="0"
          step="1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="date" id="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      </div>
      <div className="form-group">
        <label htmlFor="description" id="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"20px",
    }}>
      <div className="form-group">
        <label htmlFor="category" id="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="paymentMode" id="paymentMode">Payment Mode:</label>
        <select
          id="paymentMode"
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
          required
        >
          <option value="" disabled>Select Payment Mode</option>
          {paymentModes.map((mode) => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </select>
      </div>
        </div>
      <div className="add_Submit">
      <DButton
        text={'Add Expense'}
        buttonClass="button-primary"
        onClick={handleSubmit}
        />
        </div>

    </form>
  );
};

export default ExpenseForm;