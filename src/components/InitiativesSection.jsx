import { motion } from 'framer-motion';
import './InitiativesSection.css';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';


const InitiativesSection = () => {
  const initiatives = [
    {
      id: 1,
      title: 'Academically',
      description: "Academically is a global platform helping healthcare aspirants succeed in licensure exams like AMC, OET/A, PLAB, USMLE, OSPAP, ADC, & more. With AI-driven mock tests, live classes, and vibrant peer groups, Academically makes global career success achievable.",
      image: Image1
    },
    {
      id: 2,
      title: 'Jobslly',
      description: "Every single individual deserves a high-paying job abroad. That's why I created Jobslly—a platform that connects healthcare aspirants with the best jobs available worldwide. There's a huge demand for healthcare workers across the globe, and you get paid handsome salaries too. We will help you with your Work Visa application and other formalities.",
      image: Image2
    },
    {
      id: 3,
      title: 'Educafic',
      description: 'Educafic by Academically is a study abroad vertical where we help students achieve their dreams of studying in colleges and universities abroad. Whether you want to pursue MBBS, Dentistry, Physiotherapy, or MBA in healthcare management or an MPH course, we will help you with college applications, documentation, and everything that will help you get admission in your dream college abroad. USA, Georgia, Russia, UK, Australia- whatever your dream country is, we will help you fulfill your study abroad dreams.',
      image: Image3
    },
    {
      id: 4,
      title: 'Global Healthcare Scholarship Program',
      description: "Every single individual deserves a high-paying job abroad. That's why I created Jobslly—a platform that connects healthcare aspirants with the best jobs available worldwide. There's a huge demand for healthcare workers across the globe, and you get paid handsome salaries too. We will help you with your Work Visa application and other formalities.",
      image: Image4
    }
  ];

  return (
    <section id="initiatives" className="initiatives-section">
      <div className="container">
        <motion.div
          className="initiatives-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='header-mobile'>My 
            <span className="accent"> initiatives</span>
          </h2>
          <h2>
            <span className="accent">My initiatives that empower</span>
            <br />
            healthcare career aspirants across the globe
          </h2>
        </motion.div>

        <div className="initiatives-timeline">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              className={`initiative-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="timeline-dot"></div>

              {/* Content wrapper for left items */}
              {index % 2 === 0 && (
                <>
                  <div className="initiative-image">
                    <img src={initiative.image} alt={initiative.title} />
                  </div>
                  <div className="initiative-content">
                    <h3 className="initiative-title">{initiative.title}</h3>
                    <p className="initiative-description">{initiative.description}</p>
                  </div>
                </>
              )}

              {/* Content wrapper for right items */}
              {index % 2 !== 0 && (
                <>
                  <div className="initiative-content">
                    <h3 className="initiative-title">{initiative.title}</h3>
                    <p className="initiative-description">{initiative.description}</p>
                  </div>
                  <div className="initiative-image">
                    <img src={initiative.image} alt={initiative.title} />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;