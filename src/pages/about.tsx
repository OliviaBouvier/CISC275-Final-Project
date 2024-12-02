import React, {useState} from 'react';
import './about.css';

type TeamMember = {
    name: string;
    photo: string;
    info: string;
    email: string;
    linkedin: string;
};

const teamMembers: TeamMember[] = [
    { name: "Olivia Bouvier", 
        photo: "Olivia's Photo", 
        info: "Olivia is a junior Computer Science major at the University of Delaware with a concentration in AI and minors in English and Cognitive Science. She hopes to pursue a career in software development and to use computer science ethically to improve society.",
        email: "obouvier@udel.edu",
        linkedin: "https://linkedin.com/in/oliviabouvier"},
    { name: "Connor Griffith", 
        photo: "Connor's Photo", 
        info: "Connor is a junior Computer Science Student at the University of Delaware with a concentration in Cybersecurity. He plans to pursue his masters degree and break into the field of digital forensics. ",
        email: "congriff@udel.edu",
        linkedin: "https://linkedin.com/in/connorgriffith"},
    { name: "Chris Yanko", 
        photo: "Chris' Photo", 
        info: "Info about Chris.",
        email: "chrisy@udel.edu",
        linkedin: "https://linkedin.com/in/chrisyanko"},
    { name: "Tarun Baskuran", 
        photo: "Tarun's Photo", 
        info: "Info about Tarun.",
        email: "tarunb@udel.edu",
        linkedin: "https://linkedin.com/in/tarunb"},
];

const stars = Array.from({ length: 30 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
}));

export const About = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);;

    const handleMemberClick = (member: TeamMember) => {
        setSelectedMember(member);
    };

    const closePopup = () => {
        setSelectedMember(null);
    };

    return (
    <>
        {/* <div className="night-sky"></div> */}
        <div className="page-content">
            <div className="about-header">
                <h1>ABOUT CAREER HELPI</h1>
            </div>
            <div className="about-body">
                <p>Our mission is to help individuals discover fulfilling careers through personalized assessments and guidance</p>
                <h2>Meet the Team</h2>
                <div className="team-box-wrapper">
                <div className="team-box">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member" onClick={() => handleMemberClick(member)}>
                            <div className="photo-placeholder">{member.photo}</div>
                            <p>{member.name}</p>
                        </div>
                    ))}
                </div>

                <div className="stars-around">
                    {stars.map((star, index) => (
                        <span
                            key={index}
                            className="star"
                            style={{
                                top: star.top,
                                left: star.left,
                                animationDelay: star.delay,
                            }}
                        ></span>
                    ))}
                    </div>
                </div>
            </div>
        </div>

        {selectedMember && (
            <div className="modal-overlay" onClick={closePopup}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>{selectedMember.name}</h3>
                        <button className="close-button" onClick={closePopup}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>{selectedMember.info}</p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${selectedMember?.email}`} target="_blank" rel="noopener noreferrer">
                                {selectedMember.email}
                            </a>
                        </p>
                        <p>
                        <strong>LinkedIn:</strong>{" "}
                            <a href={selectedMember?.linkedin} target="_blank" rel="noopener noreferrer">
                                View Profile
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        )}
    </>
    );
};
