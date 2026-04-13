import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import validator from 'validator';
import 'react-phone-input-2/lib/style.css';
import './ContactModal.css';
import ThankYouModal from './ThankYouModal';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setPhone('');
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Full name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validator.isEmail(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!phone || phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const handlePhoneChange = (value) => {
    setPhone(value ? `+${value}` : '');

    setErrors((prev) => ({
      ...prev,
      phone: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      ...formData,
      phone
    };

    try {
      const response = await fetch('https://pharmlly.com/api/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials: 'omit'
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response from backend:', data);

        setSubmittedName(formData.name);
        resetForm();
        onClose();
        setShowThankYou(true);
      } else {
        console.log('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
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
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.25 }}
            >
              <button className="modal-close" onClick={onClose} type="button">
                <X size={22} />
              </button>

              <div className="modal-header-block">
                <p className="modal-eyebrow">Get in touch</p>
                <h2>Contact</h2>
                <p className="modal-subtext">
                  Share your details and message. I will get back to you soon
                </p>
              </div>

              <form onSubmit={handleSubmit} className="modal-form" noValidate>
                <div className="form-group">
                  <label htmlFor="modal-name">Full Name</label>
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={errors.name ? 'has-error' : ''}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email">Email Address</label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={errors.email ? 'has-error' : ''}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-phone">Phone Number</label>

                  <PhoneInput
                    country="in"
                    value={phone.replace('+', '')}
                    onChange={handlePhoneChange}
                    enableSearch
                    countryCodeEditable={false}
                    placeholder="Enter your phone number"
                    containerClass="phone-field-container"
                    inputClass={`phone-field ${errors.phone ? 'has-error' : ''}`}
                    buttonClass="phone-flag-button"
                    dropdownClass="phone-dropdown"
                    inputProps={{
                      name: 'phone',
                      id: 'modal-phone'
                    }}
                  />

                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-subject">Subject</label>
                  <input
                    id="modal-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className={errors.subject ? 'has-error' : ''}
                  />
                  {errors.subject && <p className="error-text">{errors.subject}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-message">Message</label>
                  <textarea
                    id="modal-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message here"
                    className={errors.message ? 'has-error' : ''}
                  />
                  {errors.message && <p className="error-text">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="modal-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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