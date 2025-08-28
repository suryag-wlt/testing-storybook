import React from "react";
import "./UserCard.css";

interface UserCardProps {
  name: string;
  title: string;
  avatar: string;
  projects: number;
  experience: number;
  rating: number;
  skills: string[];
  email: string;
  location: string;
  onContact?: () => void;
  onViewProfile?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  title,
  avatar,
  projects,
  experience,
  rating,
  skills,
  email,
  location,
  onContact,
  onViewProfile,
}) => {
  return (
    <div className="user-card">
      <div className="user-header">
        <div className="user-avatar">{avatar}</div>
        <div>
          <h2 className="user-name">{name}</h2>
          <p className="user-title">{title}</p>
        </div>
      </div>

      <div className="user-stats">
        <div className="stat stat-blue">
          <div className="stat-value">{projects}</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat stat-green">
          <div className="stat-value">{experience}</div>
          <div className="stat-label">Years</div>
        </div>
        <div className="stat stat-purple">
          <div className="stat-value">{rating}</div>
          <div className="stat-label">Rating</div>
        </div>
      </div>

      <div className="user-skills">
        <h3 className="skills-title">Skills</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className={`skill-tag color-${index % 5}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="user-contact">
        <div className="contact-item"> <strong>Email:</strong> {email}</div>
        <div className="contact-item"> <strong>Location: </strong>{location}</div>
      </div>

      <div className="user-actions">
        <button className="btn-primary" onClick={onContact}>
          Contact
        </button>
        <button className="btn-outline" onClick={onViewProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
