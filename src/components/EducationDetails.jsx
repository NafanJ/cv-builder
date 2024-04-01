import InputGroup from "./InputGroup";
import "../styles/PersonalDetails.css"

function EducationDetails({ onChange, school, degree, startDate, endDate, location }) {
  return (
    <form className="personal-details">
      <h2>Education Details</h2>
      <InputGroup
        type="text"
        id="school"
        labelText="Place of Study"
        placeholder="e.g Queen's University Belfast"
        value={school}
        onChange={onChange}
        data-key="school"
      />
      <InputGroup
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter degree"
        value={degree}
        onChange={onChange}
        data-key="degree"
      />
      <InputGroup
        type="text"
        id="start-date"
        labelText="Start Date"
        placeholder="Enter start date"
        value={startDate}
        onChange={onChange}
        data-key="startDate"
      />
      <InputGroup
        type="text"
        id="end-date"
        labelText="End Date"
        placeholder="Enter end date"
        value={endDate}
        onChange={onChange}
        data-key="endDate"
      />
    <InputGroup
        type="text"
        id="location"
        labelText="Location"
        placeholder="Enter location"
        value={location}
        onChange={onChange}
        data-key="location"
      />
    </form>
  );
}
export default EducationDetails;