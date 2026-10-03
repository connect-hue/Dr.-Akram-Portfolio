import React, { useState } from 'react';
import HeroSection from './HeroSection';
import RecognitionsSection from './RecognitionsSection';
import JourneySection from './JourneySection';
import MissionVisionSection from './MissionVisionSection';
import InitiativesSection from './InitiativesSection';
import BeyondNumbersSection from './BeyondNumbersSection';
import MediaGallerySection from './MediaGallerySection';
import VideoSection from './VideoSection';
import RewardsSection from './RewardsSection';
import ContactSection from './ContactSection';
import ContactModal from './ContactModal';
import ScholarshipModal from './ScholarshipModal';
import Card from './Card';

function Home() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isScholarshipModalOpen, setIsScholarshipModalOpen] = useState(false);

    return (
        <>
            <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />
            <RecognitionsSection />
            <JourneySection />
            <Card />
            <MissionVisionSection />
            <InitiativesSection />
            <BeyondNumbersSection onOpenScholarship={() => setIsScholarshipModalOpen(true)} />
            <MediaGallerySection />
            <VideoSection />
            <RewardsSection />
            <ContactSection />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
            <ScholarshipModal
                isOpen={isScholarshipModalOpen}
                onClose={() => setIsScholarshipModalOpen(false)}
            />
        </>
    );
}

export default Home;
