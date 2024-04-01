import InputGroup from "./InputGroup";
import "../styles/PersonalDetails.css"

function PersonalDetails({ onChange, email, fullName, phoneNumber, github }) {
  return (
    <form className="personal-details">
      <h2>Personal Details</h2>
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
    </form>
  );
}
export default PersonalDetails;
