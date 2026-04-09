// import { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import './JourneySection.css';
// import Image from '../assets/Vector.svg';
// import Picture from '../assets/Picture.png';
// import img2004 from '../assets/2004.jpg';
// import img2010 from '../assets/2010.jpeg';
// import img2013 from '../assets/2013.JPG';
// import img2014 from '../assets/2014.JPG';
// import img2015 from '../assets/2015.JPG';
// import img2017 from '../assets/2017.JPG';
// import img2018 from '../assets/2025.jpeg';
// import img2021 from '../assets/2021.jpg';
// import img2022 from '../assets/Picture.png';
// import img2023 from '../assets/mission.svg';
// import img2024 from '../assets/timespower2.JPG';
// import img2025 from '../assets/2025.jpeg';

// const JourneySection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const items = [
//     {
//       id: 1,
//       image: img2004,
//       label: 'Item 1 - SBS',
//       year: 2004,
//       description: 'Started his pharmacy journey by completing a Diploma in Pharmacy in Karnataka, laying the foundation for his future work in healthcare and education.'
//     },
//     {
//       id: 2,
//       image: img2010,
//       label: 'Item 2 - University',
//       year: 2010,
//       description: 'Graduated with a Bachelor of Pharmacy from SHUATS, Allahabad, further strengthening his academic base in pharmaceutical sciences.'
//     },
//     {
//       id: 3,
//       image: img2013,
//       label: 'Item 3 - Professional',
//       year: 2013,
//       description: 'Completed his Pharm D (Post Baccalaureate) from Annamalai University in Tamil Nadu and began his academic journey as an Assistant Professor in Uttar Pradesh, strengthening both his clinical expertise and teaching experience.'
//     },
//     {
//       id: 4,
//       image: img2014,
//       label: 'Item 4 - Conference',
//       year: 2014,
//       description: 'Joined UCSI University in Malaysia as a Clinical Pharmacy Lecturer, expanding his academic and clinical teaching experience at an international level.'
//     },
//     {
//       id: 5,
//       image: img2015,
//       label: 'Item 4 - Conference',
//       year: 2015,
//       description: 'Conducted classes for Bachelor of Pharmacy students and worked as a Clinical Pharmacy Lecturer, delivering PBL and OSCE-based teaching.'
//     },
//     {
//       id: 6,
//       image: img2017,
//       label: 'Item 4 - Conference',
//       year: 2017,
//       description: 'Started my PhD at the Faculty of Medicine and Health, The University of Sydney, Australia.'
//     },
//     {
//       id: 7,
//       image: img2018,
//       label: 'Item 4 - Conference',
//       year: 2018,
//       description: 'Since 2018, I’ve been creating YouTube videos to guide healthcare professionals on how to work in Australia, get registered, and build a stable and successful life as a healthcare practitioner.'
//     },
//     {
//       id: 8,
//       image: img2021,
//       label: 'Item 4 - Conference',
//       year: 2021,
//       description: 'It was a golden year for me, I completed my PhD, received the Global Talent Visa, and started working as a Government Research Scientist and Manager.'
//     },
//     {
//       id: 9,
//       image: img2022,
//       label: 'Item 4 - Conference',
//       year: 2022,
//       description: 'I left my government job as a Scientist and Manager at Sydney Children’s Hospital, Sydney, and founded Academically.'
//     },
//     {
//       id: 10,
//       image: img2023,
//       label: 'Item 4 - Conference',
//       year: 2023,
//       description: 'I held my first event, engaging with my audience and launching new healthcare courses at Academically Global. It was a rewarding experience that furthered our mission to empower individuals in the healthcare sector.'
//     },
//     {
//       id:11,
//       image: img2024,
//       label: 'Item 4 - Conference',
//       year: 2024,
//       description: "Established Academically Global's first corporate office in India, received the Times of India 2024 Excellence Award in Healthcare Education, and was honored with the Business World 40 Under 40 award."
//     },
//     {
//       id: 12,
//       image: img2025,
//       label: 'Item 4 - Conference',
//       year: 2025,
//       description: "Got Featured in Hotstar's Brands of Tomorrow and launched upskilling courses to support healthcare professionals."
//     },

//   ];

//   const totalItems = items.length;
//   const centerPosition = Math.floor(totalItems / 2);

//   // Get the centered item
//   const getCenteredItem = () => {
//     const centeredItemIndex = (currentIndex + centerPosition) % totalItems;
//     return items[centeredItemIndex];
//   };

//   const centeredItem = getCenteredItem();

//   // Calculate position for each item
//   const getItemPosition = (originalIndex) => {
//     const orderedIndices = [];
//     for (let i = 0; i < totalItems; i++) {
//       const adjustedIndex = (currentIndex + i) % totalItems;
//       orderedIndices.push(adjustedIndex);
//     }

//     const positionInOrder = orderedIndices.indexOf(originalIndex);
//     const radius = 400;
//     const angleStep = Math.PI / (totalItems - 1);
//     const angle = Math.PI - (angleStep * positionInOrder);

//     const x = Math.cos(angle) * radius;
//     const y = -Math.abs(Math.sin(angle) * radius * 0.3);
//     const z = Math.sin(angle) * 100;
//     const scale = 0.8 + Math.sin(angle) * 0.3;
//     const opacity = 0.5 + Math.sin(angle) * 0.5;

//     return {
//       x,
//       y,
//       z,
//       scale,
//       opacity,
//       isActive: positionInOrder === centerPosition
//     };
//   };

//   const goToIndex = (index) => {
//     const newCurrentIndex = (index - centerPosition + totalItems) % totalItems;
//     setCurrentIndex(newCurrentIndex);
//   };

//   return (
//     <div id='journey' className="journey-section">
//       <div className="journey-container">
//         <div className="journey-header">
//           <h1>From Dreams to Milestones</h1>
//           <div className="journey-subtitle">
//             A Journey of 20 Years — Built with Heart,<br />
//             Honed with Hard Work.
//           </div>
//         </div>

//         <div className="journey-carousel-container">
//           <div className="journey-carousel-wrapper">
//             <div className="journey-carousel" ref={carouselRef}>
//               {items.map((item, index) => {
//                 const position = getItemPosition(index);
//                 return (
//                   <div
//                     key={item.id}
//                     className={`journey-carousel-item ${position.isActive ? 'active' : ''}`}
//                     style={{
//                       transform: `translate(-50%, -50%) translate3d(${position.x}px, ${position.y}px, ${position.z}px) scale(${position.scale})`,
//                       opacity: position.opacity,
//                       zIndex: Math.round(position.z + 100),
//                       transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
//                     }}
//                     onClick={() => goToIndex(index)}
//                   >
//                     <div className="journey-card">
//                       <img src={item.image} alt={item.label} />
//                       {/* <div className="journey-label">{item.label}</div> */}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

          
//           {/* Centered Image */}
//           <div className="journey-center-image">
//             <img src={Image} alt="Journey" style={{ width: '6rem' }} />
//           </div>
//         </div>

//         {/* Year Display */}
//         <div className="journey-year-display">
//           <div className="journey-year journey-floating">{centeredItem.year}</div>
//         </div>

//         {/* Description */}
//         <div className="journey-description-section">
//           <div className="journey-description">{centeredItem.description}</div>
//         </div>

//         {/* Progress Dots */}
//         <div className="journey-progress-dots">
//           {items.map((_, index) => {
//             const centeredItemIndex = (currentIndex + centerPosition) % totalItems;
//             return (
//               <div
//                 key={index}
//                 className={`journey-dot ${index === centeredItemIndex ? 'active' : ''}`}
//                 onClick={() => goToIndex(index)}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JourneySection;


import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './JourneySection.css';
import Image from '../assets/Vector.svg';
import Picture from '../assets/Picture.png';
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

const JourneySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const items = [
    {
      id: 1,
      image: img2004,
      label: 'Item 1 - SBS',
      year: 2004,
      description: 'Started his pharmacy journey by completing a Diploma in Pharmacy in Karnataka, laying the foundation for his future work in healthcare and education.'
    },
    {
      id: 2,
      image: img2010,
      label: 'Item 2 - University',
      year: 2010,
      description: 'Graduated with a Bachelor of Pharmacy from SHUATS, Allahabad, further strengthening his academic base in pharmaceutical sciences.'
    },
    {
      id: 3,
      image: img2013,
      label: 'Item 3 - Professional',
      year: 2013,
      description: 'Completed his Pharm D (Post Baccalaureate) from Annamalai University in Tamil Nadu and began his academic journey as an Assistant Professor in Uttar Pradesh, strengthening both his clinical expertise and teaching experience.'
    },
    {
      id: 4,
      image: img2014,
      label: 'Item 4 - Conference',
      year: 2014,
      description: 'Joined UCSI University in Malaysia as a Clinical Pharmacy Lecturer, expanding his academic and clinical teaching experience at an international level.'
    },
    {
      id: 5,
      image: img2015,
      label: 'Item 5 - Conference',
      year: 2015,
      description: 'Conducted classes for Bachelor of Pharmacy students and worked as a Clinical Pharmacy Lecturer, delivering PBL and OSCE-based teaching.'
    },
    {
      id: 6,
      image: img2017,
      label: 'Item 6 - Conference',
      year: 2017,
      description: 'Started my PhD at the Faculty of Medicine and Health, The University of Sydney, Australia.'
    },
    {
      id: 7,
      image: img2018,
      label: 'Item 7 - Conference',
      year: 2018,
      description: "Since 2018, I've been creating YouTube videos to guide healthcare professionals on how to work in Australia, get registered, and build a stable and successful life as a healthcare practitioner."
    },
    {
      id: 8,
      image: img2021,
      label: 'Item 8 - Conference',
      year: 2021,
      description: 'It was a golden year for me, I completed my PhD, received the Global Talent Visa, and started working as a Government Research Scientist and Manager.'
    },
    {
      id: 9,
      image: img2022,
      label: 'Item 9 - Conference',
      year: 2022,
      description: "I left my government job as a Scientist and Manager at Sydney Children's Hospital, Sydney, and founded Academically."
    },
    {
      id: 10,
      image: img2023,
      label: 'Item 10 - Conference',
      year: 2023,
      description: 'I held my first event, engaging with my audience and launching new healthcare courses at Academically Global. It was a rewarding experience that furthered our mission to empower individuals in the healthcare sector.'
    },
    {
      id:11,
      image: img2024,
      label: 'Item 11 - Conference',
      year: 2024,
      description: "Established Academically Global's first corporate office in India, received the Times of India 2024 Excellence Award in Healthcare Education, and was honored with the Business World 40 Under 40 award."
    },
    {
      id: 12,
      image: img2025,
      label: 'Item 12 - Conference',
      year: 2025,
      description: "Got Featured in Hotstar's Brands of Tomorrow and launched upskilling courses to support healthcare professionals."
    },

  ];

  const totalItems = items.length;

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Get the centered item - now directly uses currentIndex
  const getCenteredItem = () => {
    return items[currentIndex];
  };

  const centeredItem = getCenteredItem();

  // Calculate position for each item - only show 3 cards
  const getItemPosition = (originalIndex) => {
    // Calculate relative position from current center item
    let relativePos = originalIndex - currentIndex;
    
    // Normalize to handle circular wrapping
    if (relativePos > totalItems / 2) relativePos -= totalItems;
    if (relativePos < -totalItems / 2) relativePos += totalItems;
    
    // Only show center card (-1, 0, +1 positions)
    const isVisible = Math.abs(relativePos) <= 1;
    
    let x, scale, opacity, blur, zIndex;
    
    if (relativePos === 0) {
      // Center card (main/active)
      x = 0;
      scale = 1.15;
      opacity = 1;
      blur = 0;
      zIndex = 30;
    } else if (relativePos === -1) {
      // Left card
      x = -300;
      scale = 0.9;
      opacity = 0.75;
      blur = 0.5;
      zIndex = 20;
    } else if (relativePos === 1) {
      // Right card
      x = 300;
      scale = 0.9;
      opacity = 0.75;
      blur = 0.5;
      zIndex = 20;
    } else {
      // Hidden cards
      x = relativePos < 0 ? -500 : 500;
      scale = 0.6;
      opacity = 0;
      blur = 2;
      zIndex = 1;
    }

    return {
      x,
      y: 0,
      z: 0,
      scale,
      opacity,
      blur,
      zIndex,
      isVisible,
      isActive: relativePos === 0
    };
  };

  return (
    <div id='journey' className="journey-section">
      <div className="journey-container">
        <div className="journey-header">
          <h1>From Dreams to Milestones</h1>
          <div className="journey-subtitle">
            A Journey of 20 Years — Built with Heart,<br />
            Honed with Hard Work.
          </div>
        </div>

        <div className="journey-carousel-container">
          {/* Left Navigation Arrow */}
          <button 
            className="journey-nav-arrow journey-nav-left"
            onClick={goPrev}
            aria-label="Previous card"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="journey-carousel-wrapper">
            <div className="journey-carousel" ref={carouselRef}>
              {items.map((item, index) => {
                const position = getItemPosition(index);
                return (
                  <div
                    key={item.id}
                    className={`journey-carousel-item ${position.isActive ? 'active' : ''}`}
                    style={{
                      transform: `translate(-50%, -50%) translateX(${position.x}px) scale(${position.scale})`,
                      opacity: position.opacity,
                      zIndex: position.zIndex,
                      filter: `blur(${position.blur}px)`,
                      pointerEvents: position.isVisible ? 'auto' : 'none',
                      visibility: position.isVisible ? 'visible' : 'hidden',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => goToIndex(index)}
                  >
                    <div className="journey-card">
                      <img src={item.image} alt={item.label} />
                      {/* <div className="journey-label">{item.label}</div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            className="journey-nav-arrow journey-nav-right"
            onClick={goNext}
            aria-label="Next card"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          {/* Centered Image */}
          <div className="journey-center-image">
            <img src={Image} alt="Journey" style={{ width: '6rem' }} />
          </div>
        </div>

        {/* Year Display */}
        <div className="journey-year-display">
          <div className="journey-year journey-floating">{centeredItem.year}</div>
          {/* <div className="journey-counter">{currentIndex + 1} / {totalItems}</div> */}
        </div>

        {/* Description */}
        <div className="journey-description-section">
          <div className="journey-description">{centeredItem.description}</div>
        </div>

        {/* Progress Dots */}
        <div className="journey-progress-dots">
          {items.map((_, index) => {
            return (
              <div
                key={index}
                className={`journey-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneySection;