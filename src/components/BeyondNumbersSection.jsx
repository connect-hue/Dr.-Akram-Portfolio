import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './BeyondNumbersSection.css';

const BeyondNumbersSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const dataPoints = [
    {
      id: 1,
      title: 'Impact So Far',
      description: 'Over 1 million healthcare professionals mentored across 50+ countries, helping them achieve their global career dreams.',
      cta: 'Learn More'
    },
    {
      id: 2,
      title: 'Value',
      description: 'Providing personalized guidance, trusted resources, and proven strategies that empower healthcare professionals to succeed globally.',
      cta: 'Discover How'
    },
    {
      id: 3,
      title: "Who It's For",
      description: 'This program is for people like me, those who come from small towns, big dreams, and little means. No one should lose their future over a fee. That\'s the idea behind ASAP.',
      cta: 'Check Eligibility'
    }
  ];

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="beyond-numbers-section">
      <div className="container">
        <motion.div
          className="beyond-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='not-active'>
            <span className="accent">Beyond Numbers and Milestones</span>
            <br />
            It's About creating meaningful impact
          </h2>
          <h2 className='active-mobile1'>
            Creating
            <span className="accent"> Impact,</span>
            <br />
            Not Just <span className="accent">Milestones</span>
          </h2>
        </motion.div>

        <div className="beyond-content">
          <div className="dropdowns-container">
            {dataPoints.map((item, index) => (
              <motion.div
                key={item.id}
                className="dropdown-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  className={`dropdown-header ${expandedItem === item.id ? 'active' : ''}`}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="dropdown-title">{item.title}</span>
                  <span className="dropdown-icon">
                    {expandedItem === item.id ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.div
                      className="dropdown-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="dropdown-inner">
                        <p>{item.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="beyond-sidebar"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="sidebar-title">
              <span className="sidebar-accent">Academically Scholarship</span>
              <br />
              <span className="sidebar-accent"> for Abroad Program</span>
            </h3>
            <p className="sidebar-text">
              This program is for people like me, those who come from small towns, big dreams, and little means. No one should lose their future over a fee. That's the idea behind the scholarship.
            </p>
            <a href="#" className="eligibility-link">
              Claim your scholarship now →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeyondNumbersSection;