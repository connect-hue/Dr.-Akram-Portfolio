import { useState } from 'react';
import './Publications.css';
import publish1 from '../assets/UOS.png';
import publish2 from '../assets/Journey.png';

function Publications() {
    const [visible, setVisible] = useState(9); // Initially show 9 public
    const publication = [
        {
            title: 'Knowledge and attitude of healthcare workers about middle east respiratory syndrome in multispecialty hospitals of Qassim, Saudi Arabia',
            description: 'Study on healthcare workers\' knowledge and attitude regarding Middle East Respiratory Syndrome (MERS) in Qassim, Saudi Arabia.',
            image: publish1,
            link: 'https://scholar.google.com/scholar?q=Knowledge+and+attitude+of+healthcare+workers+about+middle+east+respiratory+syndrome+in+multispecialty+hospitals+of+Qassim+Saudi+Arabia'
        },
        {
            title: 'Evaluation of self medication practices in rural area of town Sahaswan at Northern India',
            description: 'Evaluation of self-medication practices among the population in the rural area of Sahaswan, Northern India.',
            image: publish1,
            link: 'https://scholar.google.com/scholar?q=Evaluation+of+self+medication+practices+in+rural+area+of+town+Sahaswan+at+Northern+India'
        },
        {
            title: 'An evaluation of knowledge, attitude and practice of Indian pharmacists towards adverse drug reaction reporting: A pilot study',
            description: 'Pilot study evaluating the knowledge, attitude, and practice of Indian pharmacists concerning adverse drug reaction (ADR) reporting.',
            image: publish2,
            link: 'https://scholar.google.com/scholar?q=An+evaluation+of+knowledge+attitude+and+practice+of+Indian+pharmacists+towards+adverse+drug+reaction+reporting+A+pilot+study'
        },
        {
            title: 'Knowledge, attitude and practice of B. Sc. Pharmacy students about antibiotics in Trinidad and Tobago',
            description: 'Assessment of B. Sc. Pharmacy students\' knowledge, attitude, and practice regarding antibiotics in Trinidad and Tobago.',
            image: publish2,
            link: 'https://scholar.google.com/scholar?q=Knowledge+attitude+and+practice+of+B+Sc+Pharmacy+students+about+antibiotics+in+Trinidad+and+Tobago'
        },
        {
            title: 'Perceptions and Practices of Community Pharmacists towards Antimicrobial Stewardship in the State of Selangor, Malaysia',
            description: 'Investigating the perceptions and practices of community pharmacists on antimicrobial stewardship in Selangor, Malaysia.',
            image: publish1,
            link: 'https://scholar.google.com/scholar?q=Perceptions+and+Practices+of+Community+Pharmacists+towards+Antimicrobial+Stewardship+in+the+State+of+Selangor+Malaysia'
        },
        {
            title: 'Knowledge, attitudes and perceptions towards polio immunization among residents of two highly affected regions of Pakistan',
            description: 'Study on residents\' knowledge, attitudes, and perceptions of polio immunization in two highly affected regions of Pakistan.',
            image: publish2,
            link: 'https://scholar.google.com/scholar?q=Knowledge+attitudes+and+perceptions+towards+polio+immunization+among+residents+of+two+highly+affected+regions+of+Pakistan'
        },
        {
            title: 'Mechanistic studies of photoinduced degradation of Orange G using LC/MS',
            description: 'Mechanistic study of the photoinduced degradation process of the dye Orange G using Liquid Chromatography-Mass Spectrometry (LC/MS).',
            image: publish2,
            link: 'https://scholar.google.com/scholar?q=Mechanistic+studies+of+photoinduced+degradation+of+Orange+G+using+LC+MS'
        },
        {
            title: 'The role of pharmacoeconomics in current Indian healthcare system',
            description: 'Analysis of the significance and function of pharmacoeconomics within the contemporary Indian healthcare system.',
            image: publish1,
            link: 'https://scholar.google.com/scholar?q=The+role+of+pharmacoeconomics+in+current+Indian+healthcare+system'
        },
        {
            title: 'Steroid hormones: Part II. Serum progesterone concentration in buffaloes.',
            description: 'Part II of a study on steroid hormones, focusing on the serum progesterone concentration in buffaloes.',
            image: publish2,
            link: 'https://scholar.google.com/scholar?q=Steroid+hormones+Part+II+Serum+progesterone+concentration+in+buffaloes'
        },
        {
            title: 'Healthcare professionals\' awareness, knowledge, attitudes, perceptions and beliefs about Ebola at Gondar University Hospital, Northwest Ethiopia: a cross-sectional study',
            description: 'Cross-sectional study assessing healthcare professionals\' understanding and beliefs about the Ebola virus at Gondar University Hospital, Ethiopia.',
            image: publish1,
            link: 'https://scholar.google.com/scholar?q=Healthcare+professionals+awareness+knowledge+attitudes+perceptions+and+beliefs+about+Ebola+at+Gondar+University+Hospital+Northwest+Ethiopia+a+cross+sectional+study'
        },
        {
            title: 'Japanese Encephalitis in Assam, India: Need to Increase Healthcare Workers\' Understanding to Improve Health Care',
            description: 'Investigating the need to improve healthcare workers\' understanding of Japanese Encephalitis (JE) in Assam, India, to enhance care.',
            image: publish2,
            link: 'https://www.researchgate.net/publication/281811999_Japanese_Encephalitis_in_Assam_India_Need_to_Increase_Healthcare_Workers\'_Understanding_to_Improve_Health_Care'
        },
        {
            title: 'Fixed-dose combination antibiotics in India: global perspectives',
            description: 'An analysis of fixed-dose combination (FDC) antibiotics in India, providing a global perspective on their use and regulation.',
            image: publish2,
            link: 'https://www.researchgate.net/publication/305401953_Fixed-dose_combination_antibiotics_in_India_global_perspectives'
        },
        {
            title: 'Availability and affordability of life-saving vaccines',
            description: 'Discussion on the current status of availability and affordability of essential, life-saving vaccines.',
            image: publish2,
            link: 'https://www.researchgate.net/publication/312948650_Availability_and_affordability_of_life-saving_vaccines'
        },
        {
            title: 'Polio and cross-border management',
            description: 'Examination of strategies for polio eradication and management, particularly focusing on cross-border challenges.',
            image: publish2,
            link: 'https://www.researchgate.net/publication/312948450_Polio_and_cross-border_management'
        },
        {
            title: 'Patient preferences for the treatment of type 2 diabetes in Australia: a discrete choice experiment',
            description: 'Discrete choice experiment to determine patient preferences for Type 2 diabetes treatment options in Australia.',
            image: publish1,
            link: 'https://www.researchgate.net/publication/358151225_Patient_preferences_for_the_treatment_of_type_2_diabetes_in_Australia_a_discrete_choice_experiment'
        },
        {
            title: 'The Role of Religion, Spirituality and Fasting in Coping with Diabetes among Indian Migrants in Australia: A Qualitative Exploratory Study',
            description: 'Qualitative study exploring how religion, spirituality, and fasting influence diabetes coping mechanisms for Indian migrants in Australia.',
            image: publish1,
            link: 'https://www.researchgate.net/publication/355109468_The_Role_of_Religion_Spirituality_and_Fasting_in_Coping_with_Diabetes_among_Indian_Migrants_in_Australia_A_Qualitative_Exploratory_Study'
        },
        {
            title: 'A Qualitative Study on Medication Taking Behaviour Among People With Diabetes in Australia',
            description: 'Qualitative research investigating the medication-taking behavior and adherence patterns among individuals with diabetes in Australia.',
            image: publish2,
            link: 'https://www.researchgate.net/publication/354695241_A_Qualitative_Study_on_Medication_Taking_Behaviour_Among_People_With_Diabetes_in_Australia'
        },
        {
            title: 'Medication-taking behaviour and treatment preferences of Indian migrants with type 2 diabetes in Australia',
            description: 'Thesis on the medication-taking behavior and treatment preferences of Indian migrants with Type 2 diabetes in the Australian context.',
            image: publish1,
            link: 'https://www.researchgate.net/publication/354469091_Medication-taking_behaviour_and_treatment_preferences_of_Indian_migrants_with_type_2_diabetes_in_Australia'
        },
        {
            title: 'Insights into anti-diabetic medication taking behaviour among Indian born migrants in Australia.',
            description: 'Insights derived from a study on the anti-diabetic medication adherence and behavior of Indian-born migrants residing in Australia.',
            image: publish2,
            link: 'https://www.researchgate.net/publication/355117154_Insights_into_anti-diabetic_medication_taking_behaviour_among_Indian_born_migrants_in_Australia'
        },
        {
            title: 'Anti-diabetic medication taking behaviour among Indian born migrants in Australia: a qualitative study',
            description: 'A qualitative study examining the anti-diabetic medication-taking behavior among Indian-born migrants living in Australia.',
            image: publish1,
            link: 'https://www.researchgate.net/publication/354471428_Anti-diabetic_medication_taking_behaviour_among_Indian_born_migrants_in_Australia_a_qualitative_study'
        }
    ];

    const loadMore = () => {
        setVisible(prevVisible => prevVisible + 9); // Load 9 more public
    };

    return (
        <div className="public-container">
            <h2>My <span className="accent">Publications</span></h2>
            <div className="public-grid">
                {publication.slice(0, visible).map((publication, index) => (
                    <div className="public-card" key={index}>
                        <div className="public-image">
                            <img src={publication.image} alt={publication.title} />
                        </div>
                        <div className="public-info">
                            <h3 className="truncate-title" title={publication.title}>
                                {publication.title}
                            </h3>
                            <p className="truncate-description" title={publication.description}>
                                {publication.description}
                            </p>
                            <a href={publication.link} target="_blank" rel="noopener noreferrer">Know More &gt;</a>
                        </div>
                    </div>
                ))}
            </div>
            {visible < publication.length && (
                <button className="load-more-btn" onClick={loadMore}>Load more</button>
            )}
        </div>
    );
}

export default Publications;