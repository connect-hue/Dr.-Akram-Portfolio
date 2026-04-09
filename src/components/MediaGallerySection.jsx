import { motion } from 'framer-motion';
import './MediaGallerySection.css';
import CountryImage from '../assets/country.png';
import CountryImage2 from '../assets/image 43.png';
import CountryImage3 from '../assets/image 44.png';
import CountryImage4 from '../assets/image 45.png';
import CountryImage5 from '../assets/image 46.png';
import CountryImage6 from '../assets/image 47.png';
import img2004 from '../assets/2004.jpg';
import img2010 from '../assets/2010.jpeg';
import img2013 from '../assets/2013.JPG';
import img2014 from '../assets/2014.JPG';
import img2015 from '../assets/2015.JPG';
import img2017 from '../assets/2017.JPG';
import img2018 from '../assets/2025.jpeg';
import img2021 from '../assets/2021.jpg';
import img2022 from '../assets/Picture.png';
import img2023 from '../assets/mission.svg';
import img2024 from '../assets/timespower2.JPG';
import img2025 from '../assets/2025.jpeg';

import MediaPic from '../assets/mediapic.png';

const MediaGallerySection = () => {
  const mediaImages = [
    { id: 1, title: CountryImage },
    { id: 2, title: CountryImage2 },
    { id: 3, title: CountryImage3 },
    { id: 4, title: CountryImage4 },
    { id: 5, title: CountryImage5 },
    { id: 6, title: CountryImage6 }

  ];

  const mediaPics = [
    { id: 1, title: img2004 },
    { id: 2, title: img2010 },
    { id: 3, title: img2013 },
    { id: 4, title: img2014 },
    { id: 5, title: img2015 },
    { id: 6, title: img2017 },
    { id: 7, title: img2018 },
    { id: 8, title: img2021 },
    { id: 9, title: img2022 },
    { id: 10, title: img2023 },
    { id: 11, title: img2024 },
    { id: 12, title: img2025 }
  ];
  const companyLogos = [
    'Blooms The Chemist',
    'Mediconsul Pharmacy',
    'Terry White Chemists',
    'VIVA Pharmacy',
    'Global Pharmacy'
  ];

  return (
    <section id="media" className="media-gallery-section">
      <div className="container">
        <motion.h2
          className="sections-title"
          style={{ color: 'var(--text-white)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Media Gallery
        </motion.h2>

        <div className="media-carousel">
          <div className="media-track">
            {[...mediaPics, ...mediaPics, ...mediaPics].map((media, index) => (
              <div key={`${media.id}-${index}`} className="media-item">
                <img className="media-image-placeholder" src={media.title} alt='media'>
                </img>
              </div>
            ))}
          </div>
        </div>

        <motion.h2
          className="sections-title2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mentored students from
        </motion.h2>
        <div className="media-carousel-flag">
          <div className="media-track">
            {[...mediaImages, ...mediaImages, ...mediaImages].map((media, index) => (
              <div key={`${media.id}-${index}`} className="media-item-flag">
                <img className="media-image-placeholder" src={media.title} alt='media'>
                </img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallerySection;
