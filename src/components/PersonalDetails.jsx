import React, { useState } from 'react';
import InputGroup from "./InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../styles/PersonalDetails.css";

function PersonalDetails({ onChange, fullName, jobTitle, email, phoneNumber, github }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <form className="personal-details">
      <div className="personal-details-header">
        <h2>Personal Details</h2>
        <button
          type="button"
          onClick={toggleVisibility}
          className={`toggle-button ${isVisible ? 'rotate' : ''}`}
          aria-label="Toggle Details">
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      <div className={`form-content ${isVisible ? 'expanded' : 'collapsed'}`}>
        <InputGroup
          type="text"
          id="full-name"
          labelText="Full name"
          placeholder="First and last name"
          value={fullName}
          onChange={onChange}
          data-key="fullName"
        />
        <InputGroup
          type="text"
          id="job"
          labelText="Job Title"
          placeholder="Job Title"
          value={jobTitle}
          onChange={onChange}
          data-key="jobTitle"
        />
        <InputGroup
          type="email"
          id="email"
          labelText="Email"
          placeholder="Enter email"
          value={email}
          onChange={onChange}
          data-key="email"
        />
        <InputGroup
          type="tel"
          id="phone-number"
          labelText="Phone number"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={onChange}
          data-key="phoneNumber"
        />
        <InputGroup
          type="text"
          id="github"
          labelText="Github Username"
          placeholder="Username"
          value={github}
          onChange={onChange}
          data-key="github"
        />
      </div>
    </form>
  );
}

export default PersonalDetails;
