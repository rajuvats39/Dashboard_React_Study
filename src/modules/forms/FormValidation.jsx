import React, { useState } from 'react';

const FormValidation = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', age: '', gender: '', agreement: false, country: '',
    });

    const [errors, setErrors] = useState({
        name: '', email: '', password: '', gender: '', agreement: '', country: '',
    });

    // Handle changes in the form inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Update the formData state for the respective field
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });

        // Validate the input dynamically as the user types or interacts with the form
        validateField(name, value);
    };

    // Validate specific field
    const validateField = (name, value) => {
        let errorsCopy = { ...errors };
        switch (name) {
            case 'name':
                errorsCopy.name = value ? '' : 'Name is required';
                break;
            case 'email':
                if (!value) {
                    errorsCopy.email = 'Email is required';
                } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
                    errorsCopy.email = 'Invalid email address';
                } else {
                    errorsCopy.email = '';
                }
                break;
            case 'password':
                if (!value) {
                    errorsCopy.password = 'Password is required';
                } else if (value.length < 6) {
                    errorsCopy.password = 'Password must be at least 6 characters long';
                } else {
                    errorsCopy.password = '';
                }
                break;
            case 'gender':
                errorsCopy.gender = value ? '' : 'Gender is required';
                break;
            case 'agreement':
                errorsCopy.agreement = value ? '' : 'You must agree to the terms';
                break;
            case 'country':
                errorsCopy.country = value ? '' : 'Country is required';
                break;
            default:
                break;
        }
        setErrors(errorsCopy);
    };

    // Validate the entire form when submitting
    const validateForm = () => {
        let formIsValid = true;
        let errorsCopy = { ...errors };
        Object.keys(formData).forEach((field) => {
            if (!formData[field]) {
                formIsValid = false;
                errorsCopy[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        });
        setErrors(errorsCopy);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="row py-5">
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <span className="fw-bold text-primary">Form Validation</span>
                <p>Form validation in React.js refers to the process of validating user input within a form to ensure that it meets certain criteria or constraints before it is submitted. It helps in preventing users from submitting incorrect or incomplete data and provides a better user experience by giving feedback on the input errors.</p>
            </div>
            <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
                <h5><span className="badge text-bg-success">Form</span></h5>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="col-12">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                            {errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>

                        <div className="col-12 mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>

                        <div className="col-12 mt-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
                            {errors.password && <small className="text-danger">{errors.password}</small>}
                        </div>

                        <div className="col-12 mt-2">
                            <label htmlFor="age">Age</label>
                            <input type="number" id="age" name="age" className="form-control" value={formData.age} onChange={handleChange} />
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
                            {errors.gender && <small className="text-danger">{errors.gender}</small>}
                        </div>

                        <div className="col-12 mt-2">
                            <div className="form-check">
                                <input type="checkbox" id="agreement" name="agreement" checked={formData.agreement} onChange={handleChange} className="form-check-input" />
                                <label htmlFor="agreement" className="form-check-label me-2">I agree to the terms</label>
                                {errors.agreement && <small className="text-danger">{errors.agreement}</small>}
                            </div>
                        </div>

                        <div className="col-12 mt-2">
                            <label htmlFor="country" className="form-label me-2">Country</label>
                            <select id="country" name="country" className="form-select" value={formData.country} onChange={handleChange}                            >
                                <option value="">Select a country</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="India">India</option>
                                <option value="UK">UK</option>
                            </select>
                            {errors.country && <small className="text-danger">{errors.country}</small>}
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormValidation;
