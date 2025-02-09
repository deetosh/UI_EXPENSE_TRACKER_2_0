import React, { useState } from 'react';
import DButton from '../../atoms/DButton';
import './expense.css';

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [errors, setErrors] = useState({});

  const categories = [
    'education','food','healthcare','investment','personal','transport','utility','other'
  ];

  const paymentModes = [
    'cash','credit/debit cards','UPI','cheque','digital wallets','NET banking','EMI'
  ];

  const validateForm = () => {
    const newErrors = {};
    const now = new Date();
    const istOffset = 5.5*60*60*1000;
    const today = new Date(now.getTime() + istOffset);
    // today.setHours(0, 0, 0, 0);

    if (!amount || amount <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (!date) {
      newErrors.date = "Date is required";
    } else if (new Date(date) > today) {
      newErrors.date = "Date cannot be in the future";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!category) {
      newErrors.category = "Category is required";
    }

    if (!paymentMode) {
      newErrors.paymentMode = "Payment mode is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) return;

    const expense = {
      amount: parseInt(amount),
      date: date,
      description: description,
      category: category,
      payment_mode: paymentMode
    };

    onAddExpense(expense);

    // Reset form
    setAmount('');
    setDate('');
    setDescription('');
    setCategory('');
    setPaymentMode('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="input-group-row">
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={errors.amount ? 'form-input input-error' : 'form-input'}
          />
          {errors.amount && <div className="error-message">{errors.amount}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={errors.date ? 'form-input input-error' : 'form-input'}
          />
          {errors.date && <div className="error-message">{errors.date}</div>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? 'form-input input-error' : 'form-input'}
        />
        {errors.description && <div className="error-message">{errors.description}</div>}
      </div>

      <div className="input-group-row">
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={errors.category ? 'form-input input-error' : 'form-input'}
          >
            <option value="" disabled>Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <div className="error-message">{errors.category}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="paymentMode">Payment Mode:</label>
          <select
            id="paymentMode"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            className={errors.paymentMode ? 'form-input input-error' : 'form-input'}
          >
            <option value="" disabled>Select Payment Mode</option>
            {paymentModes.map((mode) => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
          {errors.paymentMode && <div className="error-message">{errors.paymentMode}</div>}
        </div>
      </div>

      <div className="add_Submit">
        <DButton
          text={'Add Expense'}
          buttonClass="edit-btn-primary"
          onClick={(e) => { e.preventDefault(); handleSubmit(e); }}
        />
      </div>
    </form>
  );
};

export default ExpenseForm;
