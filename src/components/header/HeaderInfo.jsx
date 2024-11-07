export default function HeaderInfo({person}) {
    return (
        <>
        <div className="name">
            <p>{person.FirstName}</p>
            <p>{person.LastName}</p>
        </div>
        <div className="contact">
            <p>{person.Email}</p>
            <p>{person.Phone}</p>
            <p>{person.Adress}</p>
        </div>
        </>
    );
}