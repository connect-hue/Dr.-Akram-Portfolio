import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import './ThankYouModal.css';

const ThankYouModal = ({ isOpen, onClose, name }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="thank-you-overlay">
          <motion.div
            className="thank-you-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="thank-you-card"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="thank-you-close" onClick={onClose}>
              <X size={20} />
            </button>

            <div className="thank-you-content">
              <motion.div 
                className="success-icon-wrapper"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
              >
                <CheckCircle size={60} className="success-icon" />
              </motion.div>

              <h2>Thank You{name ? `, ${name}` : ''}!</h2>
              <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>

              <button className="thank-you-button" onClick={onClose}>
                Back to Site
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouModal;
