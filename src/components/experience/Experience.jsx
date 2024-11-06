import ExperienceForm from "./ExperienceForm";

export default function Experience( { company, onChange, onAdd, onDelete} ) {
  return (
    <div className="formContainer">
      <h1>Experience</h1>
      {company && company.length > 0 ? (
  company.map((singleCompany) => (
    <ExperienceForm
      key={singleCompany.id}
      company={singleCompany}
      onChange={(e) => onChange(e, singleCompany.id)}
      onDelete={() => onDelete(singleCompany.id)}
      onAdd={onAdd}
    />
  ))
) : (
  <p>No hay empresas registradas.</p>
)}
    </div>
  );
}