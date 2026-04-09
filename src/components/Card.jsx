// import { useRef } from 'react'
// import { motion, useScroll, useTransform } from "framer-motion";
// import { cards } from './card-data';
// import './Card.css';

// function Card() {
//     const sectionRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start start", "end start"] // Changed from "end end" to "end start"
//     });

//     const stepCount = cards.length;
//     const step = 1 / stepCount;

//     // Create all transforms at the top level
//     const transforms = cards.map((_, index) => {
//         const stops = Array.from({ length: stepCount + 1 }, (_, k) => k * step);
//         const outputs = stops.map((_, k) => {
//             const movedSteps = Math.max(0, Math.min(k - index, stepCount - 1));
//             return -movedSteps * (384 + 250);
//         });

//         const y = useTransform(scrollYProgress, stops, outputs);

//         let scale;
//         let opacity;

//         // Slower, smoother transitions for scale and opacity
//         if (index === 0) {
//             scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 1, 1, 1]);
//             opacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [1, 1, 1, 1]);
//         } else {
//             const scaleStart = (index - 1) * step;
//             const scaleMidStart = (index - 0.7) * step; // Changed from 0.5 to 0.7 for slower transition
//             const scaleMidEnd = index * step;
//             const scaleEnd = (index + 0.7) * step; // Changed from 0.5 to 0.7 for slower transition

//             scale = useTransform(
//                 scrollYProgress,
//                 [scaleStart, scaleMidStart, scaleMidEnd, scaleEnd],
//                 [0.85, 0.92, 1, 0.95],
//                 { clamp: true }
//             );

//             opacity = useTransform(
//                 scrollYProgress,
//                 [scaleStart, scaleMidStart, scaleMidEnd, scaleEnd],
//                 [0.3, 0.7, 1, 0.7],
//                 { clamp: true }
//             );
//         }

//         return { y, scale, opacity };
//     });

//     return (
//         <section ref={sectionRef} className="card-section">
//             {/* Add heading section */}
//             <div className="card-heading-container">
//                 <h2 className="card-main-heading">
//                     From <span className="card-heading-accent">Dreams</span> to <span className="card-heading-accent">Milestones</span>
//                 </h2>
//             </div>

//             <div className="card-sticky-container">
//                 <div className="card-content-wrapper">
//                     {cards.map((card, index) => {
//                         const { y, scale, opacity } = transforms[index];

//                         return (
//                             <motion.div
//                                 key={index}
//                                 className="card-item"
//                                 style={{
//                                     y,
//                                     scale,
//                                     // opacity,
//                                     zIndex: cards.length - index
//                                 }}
//                                 transition={{
//                                     type: 'spring',
//                                     damping: 80, // Increased for smoother motion (higher value = slower deceleration)
//                                     stiffness: 90, // Decreased for slower, more gradual transition
//                                     mass: 1.5, // Increased for slower, more weighted transitions
//                                     delay: Math.abs(scrollYProgress.get() - 0.5) * 0.5, // Dynamic delay based on scroll speed
//                                 }}
//                             >
//                                 <div className="card-text-container">
//                                     <h3 className="card-title">
//                                         {card.title}
//                                     </h3>
//                                     <p className="card-subtitle">
//                                         {card.subtitle}
//                                     </p>
//                                 </div>

//                                 <div className="card-image-inner">
//                                     <img
//                                         src={card.image}
//                                         alt={card.title}
//                                         className="card-image"
//                                     />
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Card


import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import './Card.css';
import Image from '../assets/Vector.svg';

// Import images
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

const cards = [
    {
        id: 1,
        image: img2004,
        year: 2004,
        description: 'Started his pharmacy journey by completing a Diploma in Pharmacy in Karnataka, laying the foundation for his future work in healthcare and education.'
    },
    {
        id: 2,
        image: img2010,
        year: 2010,
        description: 'Graduated with a Bachelor of Pharmacy from SHUATS, Allahabad, further strengthening his academic base in pharmaceutical sciences.'
    },
    {
        id: 3,
        image: img2013,
        year: 2013,
        description: 'Completed his Pharm D (Post Baccalaureate) from Annamalai University in Tamil Nadu and began his academic journey as an Assistant Professor in Uttar Pradesh, strengthening both his clinical expertise and teaching experience.'
    },
    {
        id: 4,
        image: img2014,
        year: 2014,
        description: 'Joined UCSI University in Malaysia as a Clinical Pharmacy Lecturer, expanding his academic and clinical teaching experience at an international level.'
    },
    {
        id: 5,
        image: img2015,
        year: 2015,
        description: 'Conducted classes for Bachelor of Pharmacy students and worked as a Clinical Pharmacy Lecturer, delivering PBL and OSCE-based teaching.'
    },
    {
        id: 6,
        image: img2017,
        year: 2017,
        description: 'Started my PhD at the Faculty of Medicine and Health, The University of Sydney, Australia.'
    },
    {
        id: 7,
        image: img2018,
        year: 2018,
        description: "Since 2018, I've been creating YouTube videos to guide healthcare professionals on how to work in Australia, get registered, and build a stable and successful life as a healthcare practitioner."
    },
    {
        id: 8,
        image: img2021,
        year: 2021,
        description: 'It was a golden year for me, I completed my PhD, received the Global Talent Visa, and started working as a Government Research Scientist and Manager.'
    },
    {
        id: 9,
        image: img2022,
        year: 2022,
        description: "I left my government job as a Scientist and Manager at Sydney Children's Hospital, Sydney, and founded Academically."
    },
    {
        id: 10,
        image: img2023,
        year: 2023,
        description: 'I held my first event, engaging with my audience and launching new healthcare courses at Academically Global. It was a rewarding experience that furthered our mission to empower individuals in the healthcare sector.'
    },
    {
        id: 11,
        image: img2024,
        year: 2024,
        description: "Established Academically Global's first corporate office in India, received the Times of India 2024 Excellence Award in Healthcare Education, and was honored with the Business World 40 Under 40 award."
    },
    {
        id: 12,
        image: img2025,
        year: 2025,
        description: "Got Featured in Hotstar's Brands of Tomorrow and launched upskilling courses to support healthcare professionals."
    },
];

function Card() {
    const sectionRef = useRef(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const stepCount = cards.length;
    const step = 1 / stepCount;

    // Update current card index based on scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            // Each card is "active" (centered) for a range around its center point
            // Card i is centered at position i * step
            // We want to find which card center is closest to the current scroll position
            
            let activeIndex = 0;
            
            // Calculate which card is closest to being centered
            for (let i = 0; i < stepCount; i++) {
                const cardCenter = i * step;
                const nextCardCenter = (i + 1) * step;
                const midPoint = (cardCenter + nextCardCenter) / 2;
                
                if (latest < midPoint) {
                    activeIndex = i;
                    break;
                }
                
                // If we're past all midpoints, we're on the last card
                if (i === stepCount - 1) {
                    activeIndex = i;
                }
            }
            
            setCurrentCardIndex(activeIndex);
        });

        return () => unsubscribe();
    }, [scrollYProgress, stepCount, step]);

    // Create all transforms at the top level
    const transforms = cards.map((_, index) => {
        const stops = Array.from({ length: stepCount + 1 }, (_, k) => k * step);
        const outputs = stops.map((_, k) => {
            // For the last card, don't move it up at the final position
            if (index === stepCount - 1 && k === stepCount) {
                return 0; // Keep last card at y=0 at the end
            }
            
            const movedSteps = Math.max(0, Math.min(k - index, stepCount - 1));
            return -movedSteps * (384 + 250);
        });

        const y = useTransform(scrollYProgress, stops, outputs);

        let scale;
        let opacity;

        if (index === 0) {
            // First card - visible at start
            scale = useTransform(scrollYProgress, [0, step * 0.5, step], [1, 0.95, 0.85]);
            opacity = useTransform(scrollYProgress, [0, step * 0.5, step], [1, 0.7, 0.3]);
        } else if (index === stepCount - 1) {
            // Last card - stays visible at end
            const lastStart = (index - 1) * step;
            const lastMid = index * step;
            scale = useTransform(scrollYProgress, [lastStart, lastMid, 1], [0.85, 1, 1]);
            opacity = useTransform(scrollYProgress, [lastStart, lastMid, 1], [0.3, 1, 1]);
        } else {
            // Middle cards
            const scaleStart = (index - 1) * step;
            const scaleMidStart = (index - 0.5) * step;
            const scaleMidEnd = index * step;
            const scaleEnd = (index + 0.5) * step;

            scale = useTransform(
                scrollYProgress,
                [scaleStart, scaleMidStart, scaleMidEnd, scaleEnd],
                [0.85, 0.92, 1, 0.95],
                { clamp: true }
            );

            opacity = useTransform(
                scrollYProgress,
                [scaleStart, scaleMidStart, scaleMidEnd, scaleEnd],
                [0.3, 0.7, 1, 0.7],
                { clamp: true }
            );
        }

        return { y, scale, opacity };
    });

    const currentCard = cards[currentCardIndex];

    return (
        <section ref={sectionRef} className="card-section">
            {/* Add heading section */}
            <div className="card-heading-container">
                <h2 className="card-main-heading">
                    From <span className="card-heading-accent">Dreams</span> to <span className="card-heading-accent">Milestones</span>
                </h2>
            </div>

            <div className="card-sticky-container">
                <div className="card-content-wrapper">
                    {cards.map((card, index) => {
                        const { y, scale, opacity } = transforms[index];

                        return (
                            <motion.div
                                key={card.id}
                                className="card-item"
                                style={{
                                    y,
                                    scale,
                                    opacity,
                                    zIndex: cards.length - index
                                }}
                                transition={{
                                    type: 'spring',
                                    damping: 80,
                                    stiffness: 90,
                                    mass: 1.5,
                                }}
                            >
                                <div className="card-image-inner">
                                    <img
                                        src={card.image}
                                        alt={`Journey ${card.year}`}
                                        className="card-image"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Centered Image */}
                <div className="journey-center-image1">
                    <img src={Image} alt="Journey" />
                </div>

                {/* Year Display */}
                <div className="journey-year-display1">
                    <div className="journey-year1">{currentCard?.year}</div>
                </div>

                {/* Description */}
                <div className="journey-description-section1">
                    <div className="journey-description1">{currentCard?.description}</div>
                </div>
            </div>
        </section>
    )
}

export default Card