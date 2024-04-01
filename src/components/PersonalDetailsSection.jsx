import "../styles/PersonalDetailsSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GitHubLink from './GitHubLink'

function PersonalDetailsSection({fullName, jobTitle, email, phoneNumber, github }) {
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
            <FontAwesomeIcon icon={faGithub} />
            <GitHubLink githubUsername={github}/>
          </div>
        )}
      </div>
      <div className="candidate-details">
        <h1>{fullName}</h1>
        <h3>{jobTitle}</h3>
      </div>
    </div>
  );
}

export default PersonalDetailsSection;
