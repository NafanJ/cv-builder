import "../styles/EducationDetailsSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function EducationDetailsSection({school, degree, startDate, endDate, location }) {
  return (
    <div className="education">
        <div className="education-header">
            <h2 className="school-name">{school}</h2>
            <div className="attendance">
                {startDate && (
                    <span>{startDate} - </span>
                )}
                {endDate && (
                    <span>{endDate}</span>
                )}
            </div>
        </div>
      {degree && (
            <span>{degree}</span>
        )}
        {location && (
            <span>{location}</span>
        )}
    </div>
  );
}

export default EducationDetailsSection;