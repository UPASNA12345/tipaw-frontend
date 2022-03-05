import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../Styles/Card.styled'
import { Button } from '../Styles/Button.styled';
import { FormStyles } from '../Styles/Form.styled';
import Input from '../InputComponent/Input';

const Form = () => {
  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);




  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
      clear();
    }

  }, [formErrors]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formData));
    setIsSubmit(true);
    let isFormData = !Object.values(formData).every(o => o === '');
    console.log("sadasas" ,isFormData)

    if (formData && isFormData ) {
      axios.post('http://localhost:4000/user', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    else{
      alert('All fields are required')
    }


  };

  const clear = () => {
    setFormData(initialState);
  }

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Minimum 8 characters required";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Minimum 8 characters required";
    }
    else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password did not match";
    }

    else {
      return ''
    }

    return errors;
  };



  return (
    <Card>
      <h1>Register</h1>
      <p className='sub-font'> Join Tipaw today. It's free !</p>
      <p >Are you a shelter, breeder, veterinarian or groomer?</p>
      <p className="p-color">Click here</p>
      <FormStyles>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div style={{ textAlign: 'center' }}>
            <Button> <i className="fa fa-google" aria-hidden="true" /> Registration with Google</Button>
            <Button facebookButton><i className="fa fa-facebook-square" aria-hidden="true" /> Registration with Facebook</Button>
          </div>
          <hr />
          <div className="row">
            <Input type="text" id="firstName" name="firstName" label="Your First Name" value={formData.firstName} handleChange={handleChange} formErrors={formErrors.firstName} />
            <Input type="text" id="lastName" name="lastName" label="Your Last Name" value={formData.lastName} handleChange={handleChange} formErrors={formErrors.lastName} />
            <Input type="text" id="email" name="email" label="Your Email" value={formData.email} handleChange={handleChange} formErrors={formErrors.email} />
            <Input type={showPassword ? "text" : "password"} id="password" name="password" label="Your Password" value={formData.password} handleChange={handleChange} handleShowPassword={handleShowPassword} formErrors={formErrors.password} />
            <Input type="password" id="confirmPassword" name="confirmPassword" label="Confirm Password" value={formData.confirmPassword} handleChange={handleChange} formErrors={formErrors.confirmPassword} />
            <Input type="checkbox" id="acceptedTerms" name="acceptedTerms" label="I have read and accepted the general conditions of use of Tipaw" handleChange={handleChange} />

          </div>
          <div style={{ textAlign: 'center' }}>
            <Button type="submit" primary>Register</Button>
            <p>Already have an account?  <span className='p-color'>Login</span></p>
          </div>
          {/* <input type="submit" value="Submit" /> */}

        </form>
      </FormStyles>
    </Card>
  )
}

export default Form
