import React, { useState } from 'react';
import './form.css'; 

const Form = () => {
  const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let formIsValid = true;
  // Validation checks
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      formIsValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid (must be 10 digits)';
      formIsValid = false;
    }

    if (!formData.address.trim()) {
      errors.address = 'Address is required';
      formIsValid = false;
    }

   
    if (!formData.city.trim()) {
      errors.city = 'City is required';
      formIsValid = false;
    }

    if (!formData.state.trim()) {
      errors.state = 'State is required';
      formIsValid = false;
    }

    
    if (!formData.zip.trim()) {
      errors.zip = 'PIN Code is required';
      formIsValid = false;
    } else if (!/^\d{5}$/.test(formData.zip)) {
      errors.zip = 'PIN Code must be exactly 5 digits';
      formIsValid = false;
    }

    if (!formData.country.trim()) {
      errors.country = 'Country is required';
      formIsValid = false;
    }


    if (!formIsValid) {
      setFormErrors(errors);
      return; 
    }

    
    alert('Form submitted successfully!');
    
    setFormData(initialFormData);
    setFormErrors({});
  };

  return (
    <div className='tide'>
    <section className="form-section">
      <h2 style={{color:'white'}}>Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-half">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {formErrors.fullName && (
              <span className="error">{formErrors.fullName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="text"
              id="phone"
              name="phone"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span className="error">{formErrors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />  {formErrors.address && (
              <span className="error">{formErrors.address}</span>
            )}
          </div>
        </div>

        <div className="form-half">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            /> {formErrors.city && (
              <span className="error">{formErrors.city}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            /> {formErrors.state && (
              <span className="error">{formErrors.state}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="zip">PIN Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            /> {formErrors.zip && (
              <span className="error">{formErrors.zip}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            /> {formErrors.country && (
              <span className="error">{formErrors.country}</span>
            )}
          </div>
        </div>
        <div className="form-group">
          <div>
          <label>
            <input
              type="checkbox"
              name="terms1"
              checked={formData.terms1}
              onChange={handleChange}
            />
            I accept Terms and Conditions 1 *
          </label>
          {formErrors.terms1 && (
            <span className="error">{formErrors.terms1}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="terms2"
              checked={formData.terms2}
              onChange={handleChange}
            />
            I accept Terms and Conditions 2 *
          </label>
          {formErrors.terms2 && (
            <span className="error">{formErrors.terms2}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="terms3"
              checked={formData.terms3}
              onChange={handleChange}
            />
             I accept Terms and Conditions 3 *
          </label>
          {formErrors.terms3 && (
            <span className="error">{formErrors.terms3}</span>
          )}
       
       </div> </div>

        <button className='button1' type="submit">Submit</button>
      </form>
    </section></div>
  );
};

export default Form;
