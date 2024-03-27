import "../styles/PersonalDetailsSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function PersonalDetailsSection({email, fullName, phoneNumber, address }) {
  return (
    <div className="personal-info">
      <h1 className="resume-name">{fullName}</h1>
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
        {address && (
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{address}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalDetailsSection;
