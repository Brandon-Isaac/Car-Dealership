import React from 'react';
import ContactForm from '../components/contact/ContactForm.jsx'; // Import the ContactForm component
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Feel free to reach out to us using the form below:</p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
