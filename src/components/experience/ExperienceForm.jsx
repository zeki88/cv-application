import Button from "../common/Button";
import Input from "../common/Input";

export default function ExperienceForm( {company, onChange, onAdd, onDelete} ) {
  return (
    <form action="">
      <Input
        label="Name"
        type="text"
        placeholder="Enter name"
        className="companyName"
        name="companyName"
        value={company.companyName}
        onChange={onChange}
      />
        <Input
        label="position"
        type="text"
        placeholder="Enter position"
        className="position"
        name="position"
        value={company.position}
        onChange={onChange}
              />
        <Input
        label="Start Date"
        type="text"
        placeholder="Enter start date"
        className="startDate"
        name="startDate"
        value={company.startDate}
        onChange={onChange}
             />
        <Input
        label="End Date"
        type="text"
        placeholder="Enter end date"
        className="endDate"
        name="endDate"
        value={company.endDate}
        onChange={onChange}
             />
        <Input
        label="Location"
        type="text"
        placeholder="Enter location"
        className="location"
        name="location"
        value={company.location}
        onChange={onChange}
             />
        <Input
        label="Description"
        type="text"
        placeholder="Enter description"
        className="description"
        name="description"
        value={company.description}
        onChange={onChange}
            />

      <Button
        label="Delete"
        className="delete"
        type="button"
        onClick={onDelete}
      />
    </form>
  )
}