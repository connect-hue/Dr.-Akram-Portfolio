import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import './ContactModal.css';
import ThankYouModal from './ThankYouModal';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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

        console.log('Message sent successfully!');
        
        // Save name for personalization
        setSubmittedName(formData.name);
        
        // Reset and close form modal
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        onClose();

        // Show thank you modal
        setShowThankYou(true);
      } else {
        console.log('Failed to send message');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        onClose();

      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen && !showThankYou) return null;

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="modal-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>

            <h2>Contact</h2>

            <form onSubmit={handleSubmit} className="modal-form">
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

              <button type="submit" className="modal-submit-button">
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    <ThankYouModal 
      isOpen={showThankYou} 
      onClose={() => setShowThankYou(false)} 
      name={submittedName}
    />
    </>
  );
};

export default ContactModal;
