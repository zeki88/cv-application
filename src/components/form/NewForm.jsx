import Button from "../common/Button";
import Input from "../common/Input";

export default function NewForm({ item, isEditing, onEdit, onClose, onChange, onDelete }) {
  const input = Object.keys(item).map((key) => {
    if (key !== "id" && key !== "Show") {
      return (
        <Input
          key={key}
          label={key}
          type="text"
          placeholder={`Enter ${key}`}
          className={key}
          name={key}
          value={item[key]}
          onChange={onChange}
        />
      );
    }
    return null;
  });

  return (
    <>
      {isEditing && item.Show ? (
        <form className={`form ${item.id}`}>
          {input}
          <div className="buttons">
          <Button label="Delete" className="delete" type="button" onClick={onDelete} />
          <Button label="Close" className="close" type="button" onClick={onClose} />
          </div>
        </form>
      ) : (
        <>
          <Button label={item.Name} className="edit" type="button" onClick={onEdit} />
        </>
      )}
    </>
  );
}


