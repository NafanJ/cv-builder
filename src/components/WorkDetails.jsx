import React, { useState } from 'react';
import InputGroup from "./InputGroup";
import TagInput from "./TagInput";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../styles/EducationDetails.css";

function WorkDetails({ onChange, prevJobTitle}) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <form className="education-details">
            <div className="education-details-header">
                <h2>Work Experince</h2>
                <button
                    type="button"
                    onClick={toggleVisibility}
                    className={`arrow-button ${isVisible ? 'rotate' : ''}`}
                    aria-label="Toggle Details">
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
            <div className={`form-content ${isVisible ? 'expanded' : 'collapsed'}`}>
                <h2>Still in Development</h2>
                <InputGroup
                    type="text"
                    id="prevJobTitle"
                    labelText="Job Title"
                    placeholder="e.g DevOps Engineer"
                    value={prevJobTitle}
                    onChange={onChange}
                    data-key="prevJobTitle"
                />
            </div>
        </form>
    );
}

export default WorkDetails;
