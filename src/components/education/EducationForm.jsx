import Button from "../common/Button";
import Input from "../common/Input";

export default function EducationForm({school, onChange, onAdd, onDelete}) {
    return (
        <form action="">
        <Input
          label="Name"
          type="text"
          placeholder="Enter name"
          className="schoolName"
          name="schoolName"
          value={school.schoolName}
          onChange={onChange}
        />
          <Input
          label="Degree"
          type="text"
          placeholder="Enter degree"
          className="degree"
          name="degree"
          value={school.degree}
          onChange={onChange}
                />
          <Input
          label="Start Date"
          type="text"
          placeholder="Enter start date"
          className="startDate"
          name="startDate"
          value={school.startDate}
          onChange={onChange}
                />
          <Input
          label="End Date"
          type="text"
          placeholder="Enter end date"
          className="endDate"
          name="endDate"
          value={school.endDate}
          onChange={onChange}
                />
          <Input
          label="Location"
          type="text"
          placeholder="Enter location"
          className="location"
          name="location"
          value={school.location}
          onChange={onChange}
                />
                      <Button
          label="Delete"
          className="delete"
          type="button"
          onClick={onDelete}
        />
        </form>
    );
  }