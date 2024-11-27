import React, {useState} from 'react';
import './about.css';

type TeamMember = {
    name: string;
    photo: string;
    info: string;
};

const teamMembers: TeamMember[] = [
    { name: "Olivia Bouvier", photo: "Olivia's Photo", info: "Info about Olivia." },
    { name: "Connor Griffith", photo: "Connor's Photo", info: "Info about Connor." },
    { name: "Chris Yanko", photo: "Chris' Photo", info: "Info about Chris." },
    { name: "Tarun Baskuran", photo: "Tarun's Photo", info: "Info about Tarun." },
];

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
        <div className="night-sky"></div>
        <div className="page-content">
            <div className="about-header">
                <h1>ABOUT CAREER HELPI</h1>
            </div>
            <div className="about-body">
                <p>Our mission is to help individuals discover fulfilling careers through personalized assessments and guidance</p>
                <h2>Meet the Team</h2>
                <div className="team-box">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member" onClick={() => handleMemberClick(member)}>
                            <div className="photo-placeholder">{member.photo}</div>
                            <p>{member.name}</p>
                        </div>
                    ))}
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
                    </div>
                </div>
            </div>
        )}
    </>
    );
};
//             {/* <div className="team-member">
//                 <div className="photo-placeholder">Photo 1</div>
//                 <p>Team Member 1</p>
//             </div>
//             <div className="team-member">
//                 <div className="photo-placeholder">Photo 2</div>
//                 <p>Team Member 2</p>
//             </div>
//             <div className="team-member">
//                 <div className="photo-placeholder">Photo 3</div>
//                 <p>Team Member 3</p>
//             </div>
//             <div className="team-member">
//                 <div className="photo-placeholder">Photo 4</div>
//                 <p>Team Member 4</p>
//             </div>
//         </div>
//     </div>
// </div>
// </> */}
// // );