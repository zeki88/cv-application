export default function Input({ label, type, placeholder, name, className, value, onChange }) {
  return (
    <> 
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
    </>
  );
}