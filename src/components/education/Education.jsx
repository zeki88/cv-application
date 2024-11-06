import EducationForm from "./EducationForm";

export default function Education( { school, onChange, onAdd, onDelete} ) {
  return (
    <div>
      <h1>Education</h1>
      {school && school.length > 0 ? (
  school.map((singleSchool) => (
    <EducationForm
      key={singleSchool.id}
      school={singleSchool}
      onChange={(e) => onChange(e, singleSchool.id)}
      onDelete={() => onDelete(singleSchool.id)}
      onAdd={onAdd}
    />
  ))
) : (
  <p>No hay escuelas registradas.</p>
)}
    </div>
  );
}