import React from "react";
import "./UserCard.css";

interface UserCardProps {
  name: string;
  title: string;
  avatar: string;
  projectTitle?: string;
  projects?: number;
  experience?: number;
  experienceTitle?: string;
  ratingTitle?: string;
  rating?: number;
  skills: string[];
  skillsTitle?: string[];
  email?: string;
  emailTitle?: string;
  location?: string;
  locationTitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onContact?: () => void;
  onViewProfile?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  title,
  avatar,
  projects,
  projectTitle="Projects",
  experience,
  experienceTitle="Years",
  rating,
  ratingTitle="Rating",
  skills,
  skillsTitle="Skills",
  email,
  emailTitle='Email',
  location,
  locationTitle="Location",
  primaryButtonText="Contact",
  secondaryButtonText=" View Profile",
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
          <div className="stat-label">{projectTitle}</div>
        </div>
        <div className="stat stat-green">
          <div className="stat-value">{experience}</div>
          <div className="stat-label">{experienceTitle}</div>
        </div>
        <div className="stat stat-purple">
          <div className="stat-value">{rating}</div>
          <div className="stat-label">{ratingTitle}</div>
        </div>
      </div>

      <div className="user-skills">
        <h3 className="skills-title">{skillsTitle}</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className={`skill-tag color-${index % 5}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="user-contact">
        <div className="contact-item"> <strong>{emailTitle}:</strong> {email}</div>
        <div className="contact-item"> <strong>{locationTitle}: </strong>{location}</div>
      </div>

      <div className="user-actions">
        <button className="btn-primary" onClick={onContact}>
          {primaryButtonText}
        </button>
        <button className="btn-outline" onClick={onViewProfile}>
         {secondaryButtonText}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
