import { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';
import ThankYouModal from './ThankYouModal';
// hi

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isHovering, setIsHovering] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://pharmlly.com/api/portfolio', {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json' // Specify JSON format
        },
        body: JSON.stringify(formData), // Send form data as JSON
        credentials: 'omit', // Include credentials if needed
      });


      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        console.log('Response from backend:', data);

        // Capture name for personalized thank you
        setSubmittedName(formData.name);
        setShowThankYou(true);

        // Reset form data
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        console.log('Failed to send message');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would integrate with LSQ (LeadSquared)
    console.log('Subscribe:', subscribeEmail);
    alert('Subscribed successfully!');
    setSubscribeEmail('');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [mapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.907102065628!2d78.0790013!3d30.3632038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfed3e9da3e6ede1%3A0x74003a599d04e8eb!2sAcademically%20Global!5e0!3m2!1sen!2sin!4v1557582321874");

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Contact</h2>
            <div className="contact-info">
              <div className="info-item">
                <p className="label">India:</p>
                <p className="value">Plot A2, IT Park, Sahastradhara Rd, Doon IT Park, Sidcul, Dehradun, Uttarakhand 248001</p>
              </div>
              <div className="info-item">
                <p className="label">Australia:</p>
                <p className="value">Suite 207A/30 Campbell St, Blacktown NSW 2148W 2148Park,</p>
              </div>
              <div className="contact-details">
                <div>
                  <p className="label">Mail</p>
                  <a href="mailto:ceo@academically.com" >ceo@academically.com</a>
                </div>
                <div>
                  <p className="label">Phone no</p>
                  <a href="tel:+918071722349">+91 8071722349</a>
                </div>
              </div>
            </div>
            <div className="map-placeholder">
              <iframe
                src={mapUrl}
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Academically Global Dehradun"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>

              <div
                className="button-container"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <button className="cta-button" type="submit">
                  Send Message
                </button>
                <button className="cta-button2" style={{ borderRadius: '100%', padding: '12px' }} type='submit'>
                  <span className="button-icon">{isHovering ? '→' : '➚'}</span>
                </button>
              </div>
              {/* <button type="submit" className="submit-button">
                Send Message →
              </button> */}
            </form>
          </motion.div>
        </div>
      </div>

      <ThankYouModal 
        isOpen={showThankYou} 
        onClose={() => setShowThankYou(false)} 
        name={submittedName}
      />
    </section>
  );
};

export default ContactSection;
