import React from 'react';
import { FaCode, FaGamepad, FaChartLine } from 'react-icons/fa';
import './Card.css';

const Card = ({ heading, subheading, paragraph, iconType, profilePic }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'code':
        return <FaCode size={30} />;
      case 'game':
        return <FaGamepad size={30} />;
      case 'data':
        return <FaChartLine size={30} />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className="profile-pic">
        <img src={profilePic} alt="Profile" />
      </div>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <div className="underline">
        {renderIcon()}
      </div>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
