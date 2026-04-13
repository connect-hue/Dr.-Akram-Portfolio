import { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import validator from 'validator';
import './ContactSection.css';
import ThankYouModal from './ThankYouModal';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const [mapUrl] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.907102065628!2d78.0790013!3d30.3632038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfed3e9da3e6ede1%3A0x74003a599d04e8eb!2sAcademically%20Global!5e0!3m2!1sen!2sin!4v1557582321874'
  );

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validator.isEmail(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!phone || phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';

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
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handlePhoneChange = (value) => {
    setPhone(value ? `+${value}` : '');
    setErrors((prev) => ({
      ...prev,
      phone: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      ...formData,
      phone,
    };

    try {
      const response = await fetch('https://pharmlly.com/api/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        await response.json();
        setSubmittedName(formData.name);
        setShowThankYou(true);

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setPhone('');
        setErrors({});
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <div className="contact-grid">
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="contact-eyebrow">Get in touch</p>
            <h2 className="contact-title">Let’s build something meaningful together</h2>
            <p className="contact-subtitle">
              Reach out for collaborations, speaking, consulting, or general enquiries
            </p>

            <div className="contact-info-list">
              <div className="info-block">
                <span>India Office</span>
                <p>
                  Plot A2, IT Park, Sahastradhara Rd, Doon IT Park, Sidcul,
                  Dehradun, Uttarakhand 248001
                </p>
              </div>

              <div className="info-block">
                <span>Australia Office</span>
                <p>Suite 207A/30 Campbell St, Blacktown NSW 2148</p>
              </div>

              <div className="info-inline">
                <div>
                  <span>Email</span>
                  <a href="mailto:ceo@academically.com">ceo@academically.com</a>
                </div>
                <div>
                  <span>Phone</span>
                  <a href="tel:+918071722349">+91 8071722349</a>
                </div>
              </div>
            </div>

            <div className="map-wrap">
              <iframe
                src={mapUrl}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Academically Global Dehradun"
              />
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-heading">
              <h3>Send a message</h3>
              <p>I usually reply as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="modern-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
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
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={errors.email ? 'has-error' : ''}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
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
                    id: 'phone',
                  }}
                />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={errors.subject ? 'has-error' : ''}
                />
                {errors.subject && <p className="error-text">{errors.subject}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={errors.message ? 'has-error' : ''}
                />
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
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