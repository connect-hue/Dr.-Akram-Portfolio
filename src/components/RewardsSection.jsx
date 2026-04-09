import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './RewardsSection.css';
import Image1 from '../assets/image-1.png';
import timespower from '../assets/timespower.JPG';
import ucsi from '../assets/ucsi.JPG';
import akramsingle from '../assets/akramsingle.png';
import akramtp from '../assets/akramtp.png';

const RewardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const rewards = [
  //   {
  //     id: 1,
  //     description: "I'm grateful to have been recognised by top media houses like Jio Hotstar, ABP and more. Here are some glimpses.",
  //     image: Image1
  //   },
  //   {
  //     id: 2,
  //     description: "Recognition from industry leaders and prestigious institutions for outstanding contributions.",
  //     image: Image1
  //   },
  //   {
  //     id: 3,
  //     description: "Global acknowledgment for contributions to healthcare education and innovation.",
  //     image: Image1
  //   }
  // ];

  const rewards = [
     {
      id: 1,
      description: "I'm grateful to have been recognised by top media houses like Jio Hotstar, ABP and more. Here are some glimpses.",
      image: Image1
     },
    {
      id: 2,
      description: "I'm grateful to have been recognised by top media houses like Jio Hotstar, ABP and more. Here are some glimpses.",
      image: akramsingle
    },
    {
      id: 3,
      description: "Recognition from industry leaders and prestigious institutions for outstanding contributions.",
      image: timespower
    },
    {
      id: 4,
      description: "Global acknowledgment for contributions to healthcare education and innovation.",
      image: akramtp
    },
    {
      id: 5,
      description: "Global acknowledgment for contributions to healthcare education and innovation.",
      image: ucsi
    }
  ];

  const nextReward = () => {
    setCurrentIndex((prev) => (prev === rewards.length - 1 ? 0 : prev + 1));
  };

  const prevReward = () => {
    setCurrentIndex((prev) => (prev === 0 ? rewards.length - 1 : prev - 1));
  };

  return (
    <div className="rewards-section">
      {/* Blurred Background */}
      <div className="rewards-background">
        <img
          src={rewards[currentIndex].image}
          alt="Background"
          className="background-image"
        />
        <div className="background-overlay"></div>
      </div>

      <div className="rewards-container">
        <div className="rewards-content">
          {/* Left Side - Text Content */}
          <div className="rewards-text-content">
            <div className="reward-counter">
              0{currentIndex + 1}
            </div>

            <h2 className="rewards-title">
              Rewards &<br />
              Recognition
            </h2>

            <p className="rewards-description">
              {rewards[currentIndex].description}
            </p>

            {/* Carousel Controls */}
            <div className="carousel-controls active-desktop">
              <button
                onClick={prevReward}
                className="control-btn"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextReward}
                className="control-btn"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Side - Image with Border Frame */}
          <div className="rewards-image-side">
            <div className="image-frame">
              <img
                src={rewards[currentIndex].image}
                alt={`Award ${currentIndex + 1}`}
                className="reward-image"
                key={currentIndex}
              />
            </div>
          </div>
          {/* Carousel Controls */}
          <div className="carousel-controls active-mobile">
            <button
              onClick={prevReward}
              className="control-btn"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextReward}
              className="control-btn"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardsSection;