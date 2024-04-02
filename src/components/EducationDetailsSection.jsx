import "../styles/EducationDetailsSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function EducationDetailsSection({school, degree, classification, startDate, endDate, location, tags }) {
const shouldDisplayEducationHeader = school || degree || classification || startDate || endDate || location;
const formattedTags = tags.join(', ');
  return (
    <div className="education">
        {shouldDisplayEducationHeader && <h3>EDUCATION</h3>}
        <div className="education-header">
            <h3 className="school-name">{school}</h3>
            <div className="attendance">
                {startDate && (
                    <span>{startDate} - </span>
                )}
                {endDate && (
                    <span>{endDate}</span>
                )}
            </div>
        </div>
        <div className="education-degree">
            {degree && (
                <h3>{degree}</h3>
            )}
            <span>{classification}</span>
        </div>
        {tags && tags.length > 0 &&(
            <p><span>Relevant Modules:</span> {formattedTags}</p>
        )}
    </div>
  );
}

export default EducationDetailsSection;