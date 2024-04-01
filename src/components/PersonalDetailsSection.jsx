import "../styles/PersonalDetailsSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function PersonalDetailsSection({email, fullName, phoneNumber, github }) {
  return (
    <div className="personal-info">
      <div className="contact-info">
        {email && (
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{email}</span>
          </div>
        )}
        {phoneNumber && (
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <span>{phoneNumber}</span>
          </div>
        )}
        {github && (
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{github}</span>
          </div>
        )}
      </div>
      <h1 className="resume-name">{fullName}</h1>
    </div>
  );
}

export default PersonalDetailsSection;
