import React, { useState } from "react";
import vintage from "../assets/images/vintage-comic.png"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  // const [status, setStatus] = useState("Send");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      message: '',
    });
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
    (response) => (response.json())
      ).then((response)=> {
    if (response.status === 'success') {
      alert("Message Sent.");
      this.resetForm()
    } else if (response.status === 'fail') {
      alert("Message failed to send.")
    }
  })
}

  // if (status) {
  //   return (
  //     <>
  //       <div className="text-2xl">Thank you!</div>
  //       <div className="text-md">I'll be in touch soon.</div>
  //     </>
  //   );
  // }

  return (
  <section id="contact" className="py-3">
    <div className="card p-4">
      <img src={vintage} alt="Vintage comic-style woman on phone" className="card__image" />
      <div className="card-title">
        <span>CONTACT ME</span>
      </div>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div class="input-container">
          <input 
            type="text" 
            id="name" 
            name="name" 
            onChange={handleChange} 
            value={formState.name} 
            required="required"
          />
          <label for="name">Name</label>
          <div class="bar"></div>
        </div>
        <div class="input-container">
          <input 
            type="text" 
            id="email" 
            name="email" 
            onChange={handleChange} 
            value={formState.email} 
            required="required"
          />
          <label for="email">Email</label>
          <div class="bar"></div>
        </div>
        <div class="input-container">
          <input 
            type="text"  
            id="message" 
            name="message" 
            rows="4"
            onChange={handleChange} 
            value={formState.message} 
            required="required"
          />
          <label for="message">Message</label>
          <div class="bar"></div>
        </div>
        {/* <div className="app-form-group">
          <input 
            className="app-form-control" 
            placeholder="NAME" 
            name="name" 
            onChange={handleChange} 
            value={formState.name} 
            tabIndex="5" 
          />
        </div>
        <div className="app-form-group">
          <input 
            className="app-form-control" 
            placeholder="EMAIL" 
            name="email" 
            onChange={handleChange} 
            value={formState.email} 
            tabIndex="6" 
          />
        </div>
        <div className="app-form-group message">
          <input 
            className="app-form-control" 
            placeholder="MESSAGE" 
            name="message" 
            onChange={handleChange} 
            value={formState.message} 
            tabIndex="7" 
          />
        </div> */}
        <div className="app-form-group buttons">
          <button 
            type="submit"
            className="btn">send</button>
        </div>
      </form>
    </div>
  </section>
  );
}

export default Contact