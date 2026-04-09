import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MissionVisionSection.css';
import Vision from '../assets/vision.svg';
import Mission from '../assets/mission.svg';

const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const content = {
    mission: [
      {
        id: 1,
        title: 'Mission',
        text: 'To make global healthcare careers accessible to every skilled healthcare professional, regardless of their location or background.',
        icon: Vision
      },
      {
        id: 2,
        title: 'Vision',
        text: 'Empowering healthcare professionals with trusted guidance, mentorship, and global career pathways.',
        icon: Mission
      }
    ]
  };

  return (
    <section id="mission" className="mission-vision-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mission & Vision
        </motion.h2>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="tab-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="content-grid">
              {content[activeTab].map((item) => (
                <motion.div
                  key={item.id}
                  className="content-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="card-image">
                    <img
                      src={item.icon}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="content-text">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MissionVisionSection;