import PersonalDetailsSection from './PersonalDetailsSection.jsx'
import "../styles/Resume.css";

function Resume(personalInfo, educationDetails, professionalExperience) {
    return (
    <div className="resume-container">
        <PersonalDetailsSection
            fullName={personalInfo.personalDetails.fullName}
            email={personalInfo.personalDetails.email}
            phoneNumber={personalInfo.personalDetails.phoneNumber}
            address={personalInfo.personalDetails.address}
        />
    </div>
    );
}

export default Resume