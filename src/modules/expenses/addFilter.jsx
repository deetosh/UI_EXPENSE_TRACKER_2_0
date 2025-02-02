import React, { useState } from 'react';
import DButton from '../../atoms/DButton';
import './expense.css';

const FilterForm = ({ onAddFilter }) => {
  const [amount_from, setAmountFrom] = useState('');
  const [date_from, setDateFrom] = useState('');
  const [date_to, setToDate] = useState('');
  const [amount_to, setAmountTo] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [errors, setErrors] = useState({});

  const categories = [
    'utility', 'transport', 'food', 'healthcare', 'others', 'education', 'investment', 'personal'
  ];

  const paymentModes = [
    'cash', 'credit/debit cards', 'UPI', 'cheque', 'digital wallets', 'NET banking', 'EMI'
  ];

  const validateForm = () => {
    const newErrors = {};
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const today = new Date(now.getTime() + istOffset);
    
    if (!amount_from && amount_to>0 ) {
        newErrors.amount = "From Amount is required";
    }
    else if(amount_from && amount_from <=0){
        newErrors.amount = "From Amount must be greater than 0";
    }
    if (!amount_to && amount_from>0) {
        newErrors.amount = "To Amount is required";
    }
    else if(amount_to && amount_to <=0){
        newErrors.amount = "To Amount must be greater than 0";
    }
        
    if (!date_from && date_to) {
      newErrors.date = "From Date is required";
    } 
    else if (new Date(date_from) > today) {
      newErrors.date = "Date cannot be in the future";
    }
    if (!date_to && date_from) {
      newErrors.date = "To Date is required";
    } 
    else if (new Date(date_to) > today) {
      newErrors.date = "Date cannot be in the future";
    }
    if (date_from && date_to && new Date(date_from) > new Date(date_to)) {
      newErrors.date = "From Date cannot be greater than To Date";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) return;

    const expense = {
      filter_date:{
        from_date: date_from&&date_to?date_from:null,
        to_date: date_from&&date_to?date_to:null
      },
      amount:{
        amount_from: (amount_from && amount_to)?parseInt(amount_from):null,
        amount_to: (amount_from && amount_to)?parseInt(amount_to):null
      },
      category: category?category:null,
      payment_mode: paymentMode?paymentMode:null
    };
    console.log(expense);

    onAddFilter(expense);

    // Reset form
    setAmountFrom('');
    setAmountTo('');
    setDateFrom('');
    setToDate('');
    setCategory('');
    setPaymentMode('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
    
      <div className="input-group-row">      
        <div className="form-group">
          <label htmlFor="amount">From Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount_from}
            onChange={(e) => setAmountFrom(e.target.value)}
            className={errors.amount ? 'form-input input-error' : 'form-input'}
          />
          {errors.amount && <div className="error-message">{errors.amount}</div>}
        
          <label htmlFor="amount">To Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount_to}
            onChange={(e) => setAmountTo(e.target.value)}
            className={errors.amount ? 'form-input input-error' : 'form-input'}
          />
          {errors.amount && <div className="error-message">{errors.amount}</div>}
        </div>
        </div>
        <div className="input-group-row">
        <div className="form-group">
          <label htmlFor="date">From Date:</label>
          <input
            type="date"
            id="date"
            value={date_from}
            onChange={(e) => setDateFrom(e.target.value)}
            className={errors.date ? 'form-input input-error' : 'form-input'}
          />
          {errors.date && <div className="error-message">{errors.date}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="date">To Date:</label>
          <input
            type="date"
            id="date"
            value={date_to}
            onChange={(e) => setToDate(e.target.value)}
            className={errors.date ? 'form-input input-error' : 'form-input'}
          />
          {errors.date && <div className="error-message">{errors.date}</div>}
        </div>
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
          text={'Add Filter'}
          buttonClass="button-primary"
          onClick={(e) => { e.preventDefault(); handleSubmit(e); }}
        />
      </div>
    </form>
  );
};

export default FilterForm;
