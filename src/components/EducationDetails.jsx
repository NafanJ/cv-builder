import React, { useState } from 'react';
import InputGroup from "./InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../styles/EducationDetails.css";

function EducationDetails({ onChange, school, degree, startDate, endDate, location }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <form className="education-details">
      <div className="education-details-header">
        <h2>Education Details</h2>
        <button
          type="button"
          onClick={toggleVisibility}
          className={`arrow-button ${isVisible ? 'rotate' : ''}`}
          aria-label="Toggle Details">
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      <div className={`form-content ${isVisible ? 'expanded' : 'collapsed'}`}>
        <>
          <InputGroup
            type="text"
            id="school"
            labelText="Place of Study"
            placeholder="e.g Queen's University Belfast"
            value={school}
            onChange={onChange}
            data-key="school"
          />
          <InputGroup
            type="text"
            id="degree"
            labelText="Degree"
            placeholder="Enter degree"
            value={degree}
            onChange={onChange}
            data-key="degree"
          />
          <InputGroup
            type="text"
            id="start-date"
            labelText="Start Date"
            placeholder="Enter start date"
            value={startDate}
            onChange={onChange}
            data-key="startDate"
          />
          <InputGroup
            type="text"
            id="end-date"
            labelText="End Date"
            placeholder="Enter end date"
            value={endDate}
            onChange={onChange}
            data-key="endDate"
          />
        </>
        </div>
    </form>
  );
}

export default EducationDetails;
