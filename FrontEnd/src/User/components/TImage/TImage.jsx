import React from 'react';
import './TImage.css';
const TImage = ({ title, description}) =>
{
    return (
        <div className="image-container">
            <div className="image-overlay">
                <h1 className="heading-top">{title}</h1>
                <p className="description-top">{description}</p>
            </div>
        </div>
    );
};

export default TImage;
