import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";
export default function Header({person, onChange, onEdit}) {

  const [activeEditId, setActiveEditId] = useState(true)

  const input = Object.keys(person).map((key) => {
    if (key !== "Show") {
      return (
        <Input
          key={key}
          label={key}
          type="text"
          placeholder={`Enter ${key}`}
          className={key}
          name={key}
          value={person[key]}
          onChange={onChange}
        />
      );
    }
    return null;
  });

  function onClose() {
    setActiveEditId(null);
  }

  return (
    <div className="formContainer">
    <h1>Personal Info</h1>
    {activeEditId && person.Show ? (
      <form className={"form person"}>
        {input}
        <div className="buttons">
        <Button label="Close" className="close" type="button" onClick={onClose} />
        </div>
      </form>
    ) : (
      <>
        <Button label="Edit" className="edit" type="button" onClick={(e) => {onEdit(e); setActiveEditId(true);}} />
      </>
    )}
    </div>
  );
}