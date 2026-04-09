import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './VideoSection.css';
import Brand from '../assets/bot.png';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section">
      <div className="container">
        <motion.div
          className="video-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="video-thumbnail">
            <div className="video-placeholder">
              {/* Replace the image source with your actual image */}
              <a 
                href="https://www.hotstar.com/in/shows/brands-of-tomorrow/1260147774/academically-med-ed-simplified/1271401000/watch" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={Brand}
                  alt="BRANDS of TOMORROW"
                  className="thumbnail-image"
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isPlaying && (
            <motion.div
              className="video-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modal-backdrop" onClick={() => setIsPlaying(false)} />
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button className="close-button" onClick={() => setIsPlaying(false)}>
                  <X size={24} />
                </button>
                <div className="video-container">
                  {/* Optionally, if you want to embed the video inside the modal, uncomment this */}
                  {/* <iframe src="your-video-link-here" title="Video" /> */}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoSection;
