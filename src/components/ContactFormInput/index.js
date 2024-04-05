import React from 'react'

const ContactFormInput = ({ type, label, icon, ...other }) => {
  let placeholder = label && label.charAt(0).toUpperCase() + label.slice(1);

  if (type === "textarea") {
    return (
    <div className="input-container">
      <textarea 
        aria-describedby={label}
        placeholder={placeholder}
        className="form-control"
        id={label} 
        name={"user_" + label}
        {...other}
        required
      />
      <label htmlFor={label}>
        {icon && icon}
        <span className="label">{placeholder}</span>
      </label>
      <div className="bar"></div>
    </div>
    )
  }

  return (
    <div className="input-container">
      <input 
        type={type} 
        aria-describedby={label}
        placeholder={placeholder}
        className="form-control"
        id={label} 
        name={"user_" + label}
        {...other}
        required
      />
      <label htmlFor={label}>
        {icon && icon}
        <span className="label">{placeholder}</span>
      </label>
      <div className="bar"></div>
    </div>
  );
};

export default ContactFormInput;