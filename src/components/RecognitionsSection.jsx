import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './RecognitionsSection.css';
// import Image1 from '../assets/bwhealthcare.png';
// import Image2 from '../assets/timespower.png';
import yourstory from '../assets/yourstory.png';
import publish1 from '../assets/UOS.png';
import publish2 from '../assets/Journey.png';
import News18 from '../assets/news18.svg';
import indianexpress from '../assets/indianexpress.png';
// import timespower from '../assets/timespower.png';
import english from '../assets/english.svg';
import ht from '../assets/htimes.svg';

const RecognitionsSection = () => {
  const [currentPublicationIndex, setCurrentPublicationIndex] = useState(0);

  const runningText = [
    'Entrepreneur', 'Educator', 'Motivator', 'Healthcare Leader',
    'Global Mentor', 'Career Coach', 'Innovator'
  ];

const recognitions = [
  { 
    id: 1, 
    image: News18, 
    title: 'News 18', 
    description: 'Teachings of the great explore of truth, the master-builder of human happiness.',
    link: "https://hindi.news18.com/news/career/doctor-akram-is-showing-way-to-youth-for-jobs-abroad-in-health-care-sector-8630616.html"
  },
  { 
    id: 2, 
    image: indianexpress, 
    title: 'Indian Express', 
    description: 'Teachings of the great explore of truth, the master-builder of human happiness.',
    link: "https://zeenews.india.com/economy/farmers-sons-journey-from-poverty-to-land-a-rs-6-lakh-monthly-job-quits-that-to-launch-startup-earning-rs-2-cr-per-month-2788742.html"
  },
  { 
    id: 3, 
    image: english, 
    title: 'Z News', 
    description: 'Teachings of the great explore of truth, the master-builder of human happiness.',
    link: "https://www.newindianexpress.com/states/kerala/2024/Sep/28/ima-kerala-teams-up-with-academically-global#:~:text=KOCHI%3A%20Academically%20Global%2C%20a%20pioneering,registration%20exams%20and%20higher%20studies"
  },
  { 
    id: 4, 
    image: yourstory, 
    title: 'YourStory', 
    description: 'Teachings of the great explore of truth, the master-builder of human happiness.',
    link: "https://yourstory.com/2025/04/academically-global-paves-healthcare-professionals-way"
  },
  { 
    id: 5, 
    image: ht, 
    title: 'Hindustan Times', 
    description: 'Teachings of the great explore of truth, the master-builder of human happiness.',
    link: "https://www.hindustantimes.com/sponsored-post/empowering-healthcare-professionals-to-practice-abroad-dr-akram-ahmeds-vision-101725343289999.html"
  }
];

  const [wrapperHeight, setWrapperHeight] = useState('auto');
  const publicationRefs = useRef([]);
  useEffect(() => {
    // Calculate height of active card
    if (publicationRefs.current[currentPublicationIndex]) {
      const activeCard = publicationRefs.current[currentPublicationIndex];
      const height = activeCard.offsetHeight;
      setWrapperHeight(`${height}px`);
    }
  }, [currentPublicationIndex]);

  const publications = [
    {
      id: 1,
      title: 'Patient preferences for the treatment of type 2 diabetes in Australia',
      date: '2022',
      description: 'Explores treatment preferences for type 2 diabetes patients in Australia.',
      image: publish1,
      link:'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=16ZTuOQAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=16ZTuOQAAAAJ:t7zJ5fGR-2UC'
    },
    {
      id: 2,
      title: 'Medication-taking behaviour and treatment preferences of Indian migrants ... ',
      date: '2021',
      description: 'Investigates medication adherence and treatment choices among Indian migrants with diabetes.',
      image: publish2,
      link:'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=16ZTuOQAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=16ZTuOQAAAAJ:_B80troHkn4C'
    },
    {
      id: 3,
      title: 'Pharmaceutical waste and antimicrobial resistance',
      date: '2017',
      description: 'Analyzes the impact of pharmaceutical waste on antimicrobial resistance.',
      image: publish2,
      link:'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=16ZTuOQAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=16ZTuOQAAAAJ:uWQEDVKXjbEC'
    },
    {
      id: 4,
      title: 'Knowledge and attitude of healthcare workers about middle east respiratory syndrome ... ',
      date: '2014',
      description: 'Examines healthcare workers knowledge and attitudes toward MERS in Saudi Arabia.',
      image: publish2,
      link:'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=16ZTuOQAAAAJ&citation_for_view=16ZTuOQAAAAJ:QIV2ME_5wuYC'
    }
   
  ];

  const nextPublication = () => {
    setCurrentPublicationIndex((prev) =>
      prev === publications.length - 1 ? 0 : prev + 1
    );
  };

  const prevPublication = () => {
    setCurrentPublicationIndex((prev) =>
      prev === 0 ? publications.length - 1 : prev - 1
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 2 < publications.length) {
      setCurrentIndex(currentIndex + 2); // Move to the next two items
    }
  };

  const prevSlide = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2); // Move to the previous two items
    }
  };

  const visiblePublications = publications.slice(currentIndex, currentIndex + 2);
  console.log("Visible Publication", visiblePublications);
  return (
    <section className="recognitions-section">
      {/* Running Text Banner */}
      <div className="running-text-wrapper">
        <div className="running-text">
          {[...runningText, ...runningText].map((text, index) => (
            <span key={index} className="running-item">
              {text} <span className="dot">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Static Section */}
        <motion.div
          className="recognition-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mentored-section">
            <p className="mentored-label">Mentored over</p>
            <h2 className="mentored-count">1Million+</h2>
            <p className="mentored-description">
              healthcare career aspirants across the world
            </p>
          </div>

          <div className="testimonial-box">
            <p className="testimonial-text">
              " Dr. Akram Ahmad is a renowned personality whose contributions, skills, and qualifications
              in pharmacy and healthcare empower people from every walk of life."
            </p>
            <div className="testimonial-source">
              <span className="source-logo">TOI</span>
              <span className="source-name">Times of India</span>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Recognitions Banner */}
      <div className="recognitions-banner">
        <div className="recognitions-scroll-container recognitions-infinite">
          {[...recognitions, ...recognitions, ...recognitions].map((recognition, index) => (
            <div
              key={`${recognition.id}-${index}`}
              className="recognition-card"
            >
               <a href={recognition.link} target="_blank" rel="noopener noreferrer">
          <div>
            <img
              src={recognition.image}
              alt="recognition"
              className="recognition-image"
            />
          </div>
        </a>
              <h3>{recognition.title}</h3>
              <p style={{ textAlign: 'left' }}>{recognition.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        {/* Publications Carousel */}
        <motion.div
          className="publications-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Desktop View */}
          <div className="publications-desktop">
            <div className="publications-grid">
              {visiblePublications.map((pub) => (
                <a href={pub.link} target="_blank" rel="noopener noreferrer" key={pub.id}>
                <div key={pub.id} className="publication-card-desktop">
                  <div className="publication-image-desktop">
                    <img src={pub.image} alt={pub.imageAlt} />
                  </div>
                  <div className="publication-content-desktop">
                    <p className="publication-date-desktop">• {pub.date}</p>
                    <h3 className="publication-title-desktop">{pub.title}</h3>
                    <p className="publication-description-desktop">{pub.description}</p>
                  </div>
                </div>
                </a>
              ))}
              <div className="section-header">
                <h2>
                  My <span className="accent">Publications</span>
                </h2>
                <a href="/publications" className="view-all-link">View all →</a>
                <div className="carousel-dots-desktop carousel-bottom">
                  <button className="dot-button" onClick={prevSlide}>
                    <ChevronLeft size={20} />
                  </button>
                  <button className="dot-button" onClick={nextSlide}>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View - Carousel */}
          <div className="publications-mobile">
            <div className="section-header">
              <h2>
                My <span className="accent">Publications</span>
              </h2>
            </div>
            <div className="publications-carousel">
              <button className="carousel-button prev" onClick={prevPublication} aria-label="Previous publication">
                <ChevronLeft size={24} />
              </button>
              <div className="publications-wrapper" style={{ height: wrapperHeight }}>
                {publications.map((pub, index) => (
                  <div
                    key={pub.id}
                    ref={el => publicationRefs.current[index] = el}
                    className={`publication-card ${index === currentPublicationIndex ? 'active' : ''}`}
                    style={{
                      transform: `translateX(${(index - currentPublicationIndex) * 100}%)`
                    }}
                  >
                    <div className="publication-image">
                      <img src={pub.image} alt={pub.imageAlt} />
                    </div>
                    <div className="publication-info">
                      <p className="publication-date">• {pub.date}</p>
                      <h3>{pub.title}</h3>
                      <p className="publication-description">{pub.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-button next" onClick={nextPublication} aria-label="Next publication">
                <ChevronRight size={24} />
              </button>
            </div>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <a href="/publications" className="view-all-link" >View all →</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecognitionsSection;
