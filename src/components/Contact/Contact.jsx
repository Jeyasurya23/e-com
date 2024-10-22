import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us using the form below.</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
