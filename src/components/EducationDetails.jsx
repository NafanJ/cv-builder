import React, { useState } from 'react';
import InputGroup from "./InputGroup";
import TagInput from "./TagInput";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../styles/FormGroup.css";

function EducationDetails({ onChange, school, degree, classification, startDate, endDate, location, tags, addTag, removeTag }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <form className="form-group">
      <div className="form-group-header">
        <h2>Education</h2>
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
            id="classification"
            labelText="Classification"
            placeholder="Enter final grade"
            value={classification}
            onChange={onChange}
            data-key="classification"
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
          <TagInput tags={tags} addTag={addTag} removeTag={removeTag} />
        </>
        </div>
    </form>
  );
}

export default EducationDetails;
