import React from 'react';
import './about.css';

export const About = () => (
    <div className="page-content">
        <div className="about-header">
            <h1>ABOUT CAREER HELPI</h1>
        </div>
        <div className="about-body">
        <p>Our mission is to help individuals discover fulfilling careers through personalized assessments and guidance</p>
        <h2>Meet the Team</h2>
        <div className="team-box">
            <div className="team-member">
                <div className="photo-placeholder">Photo 1</div>
                <p>Team Member 1</p>
            </div>
            <div className="team-member">
                <div className="photo-placeholder">Photo 2</div>
                <p>Team Member 2</p>
            </div>
            <div className="team-member">
                <div className="photo-placeholder">Photo 3</div>
                <p>Team Member 3</p>
            </div>
            <div className="team-member">
                <div className="photo-placeholder">Photo 4</div>
                <p>Team Member 4</p>
            </div>
        </div>
    </div>
</div>
);