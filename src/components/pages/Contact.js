import React from 'react';
import '../../assets/styles/Contact.css';

export default function Contact() {
  return (
<div id="contact" className="bg-two">
    <div className="contact-content">
        <div className="row justify-content-center">
            <div className="col-xs-12">
                <h2 className="text-center">Send a message</h2>
                <form className="row">
                    <div className="col-12">
                        <div className="styled-input wide">
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input type="text" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input float-start">
                            <input type="text" required />
                            <label>Phone</label> 
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="btn-lrg submit-btn">Submit</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}
