export default function Button({ label, onClick, className, type }) {
    return (
        <button className={className} onClick={onClick} type={type}>
          <i className="fa-solid fa-trash" />
          {label}
        </button>
    );
  }