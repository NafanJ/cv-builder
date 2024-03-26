import PersonalDetailsSection from './PersonalDetailsSection.jsx'

function Resume(personalInfo, educationDetails, professionalExperience) {
    return (
    <div className="resume-container">
        <h1>Resume</h1>  
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