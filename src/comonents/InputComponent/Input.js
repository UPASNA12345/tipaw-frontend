import React from 'react';


const Input = ({ name, id, label, type, handleChange, handleShowPassword, formErrors,value}) => {
    
    return (
        <div className="col-90">
            <label htmlFor={name}>{label} </label>
            <input
                name={name}
                id={id}
                type={type}
                onChange={handleChange}
                value = {value}
                // required
            />
            {(name === 'password')?
                (
                    <button className="password-icon" type="button" onClick={handleShowPassword}>
                        {type === 'password' ? <i class="fa fa-eye" aria-hidden="true" />
                            : <i className="fa fa-eye-slash" aria-hidden="true" />}
                    </button>)
                : ''}

           {formErrors?<p className='error-text'>{formErrors} </p>:''} 
           

        </div>
    )
}

export default Input
