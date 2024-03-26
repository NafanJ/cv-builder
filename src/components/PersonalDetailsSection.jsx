function PersonalDetailsSection({email, fullName, phoneNumber, address }) {
  return (
    <div className="personal-info">
      <h1 className="resume-name">{fullName}</h1>
      <div className="contact-info">
        <div>
            <span>{email}</span>
        </div>
        <div>
            <span>{phoneNumber}</span>
        </div>
        <div>
            <span>{address}</span>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsSection;
