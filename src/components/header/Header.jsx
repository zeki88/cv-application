import Input from "../common/Input";

export default function Header({person, onChange}) {

  return (
    <div>
        <h1>Personal Info</h1>
      <form action="">
      <Input
        label="First Name"
        type="text"
        placeholder="Enter first name"
        className="firstName"
        value={person.firstName}
        onChange={onChange}
      />
        <Input
        label="Last Name"
        type="text"
        placeholder="Enter last name"
        className="lastName"
        value={person.lastName}
        onChange={onChange}
      />
      <Input
        label="Email"
        type="text"
        placeholder="Enter email"
        className="email"
        value={person.email}
        onChange={onChange}
      />
      <Input
        label="Phone"
        type="text"
        placeholder="Enter phone"
        className="phone"
        value={person.phone}
        onChange={onChange}
     />
      <Input
        label="Adress"
        type="text"
        placeholder="Enter adress"
        className="adress"
        value={person.adress}
        onChange={onChange}
      />
      </form>
    </div>
  );
}