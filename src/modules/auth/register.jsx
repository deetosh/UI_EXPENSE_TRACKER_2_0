import React, { useState } from 'react';
import './auth.css';
import { callAPI } from '../../services/ApiHelper';

const Register = ({ className, onLoginClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Prevent multiple submissions

  // ✅ Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear errors when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    // ✅ Validate Name
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    // ✅ Validate Email
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    // ✅ Validate Password
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    // ✅ Validate Confirm Password
    if (!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    // ✅ If there are errors, prevent submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ Prepare object for API call
    const userData = {
      firstName: formData.name,
      email: formData.email,
      password: formData.password,
    };

    // ✅ Call the API
    setLoading(true);
    const response = await callAPI('/signup', 'POST', userData);
    setLoading(false);

    if (response.status === 200) {
      alert('Registration Successful! 🎉');
      setFormData({ name: '', email: '', password: '', confirmPassword: '' }); // Reset form
    } else {
      alert(response.message || 'Something went wrong!');
    }
  };

  return (
    <form className={`signUp ${className}`} onSubmit={handleSubmit}>
      <h3>Create Your Account</h3>

      {/* ✅ Name Input */}
      <input
        className="w100"
        type="text"
        name="name"
        placeholder="Name"
        autoComplete="off"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      {/* ✅ Email Input */}
      <input
        className="w100"
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="off"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      {/* ✅ Password Input */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      {/* ✅ Confirm Password Input */}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      <button className="form-btn sx log-in" type="button" onClick={onLoginClick}>
        Log In
      </button>
      <button className="form-btn dx" type="submit" disabled={loading}>
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Register;