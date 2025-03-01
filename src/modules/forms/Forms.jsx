import React, { useState } from 'react';

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    agreement: false,
    country: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Forms</span>
        <p>Forms play an essential role in modern web applications. They enable users to share information, complete tasks and provide feedback.</p>
        <p>Without forms, many of the tasks that we take for granted on the web, such as logging in, signing up, or making purchases, would not be possible.</p>
        <p>Handling forms in React involves capturing user input, managing form state and performing actions bassed on form data.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-success">Form</span></h5>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className='form-control' value={formData.name} onChange={handleChange} required />
            </div>

            <div className="col-12 mt-2">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className='form-control' value={formData.email} onChange={handleChange} required />
            </div>

            <div className="col-12 mt-2">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className='form-control' value={formData.password} onChange={handleChange} required />
            </div>

            <div className="col-12 mt-2">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" name="age" className='form-control' value={formData.age} onChange={handleChange} />
            </div>

            <div className="col-12 mt-2">
              <label className="form-label me-2">Gender</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="form-check-input" />
                <label htmlFor="male" className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="form-check-input" />
                <label htmlFor="female" className="form-check-label">Female</label>
              </div>
            </div>

            <div className="col-12 mt-2">
              <div className="form-check">
                <label htmlFor="agreement" className="form-check-label me-2">I agree to the terms</label>
                <input type="checkbox" id="agreement" name="agreement" checked={formData.agreement} onChange={handleChange} className="form-check-input" />
              </div>
            </div>

            <div className="col-12 mt-2">
              <label htmlFor="country" className="form-label me-2">Country</label>
              <select id="country" name="country" className="form-select" value={formData.country} onChange={handleChange}  >
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <div className="col-12 mt-2">
              <button className='btn btn-primary' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
