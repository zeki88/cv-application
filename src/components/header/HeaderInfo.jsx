export default function HeaderInfo({person}) {
    return (
        <>
        <div className="name">
            <p>{person.firstName}</p>
            <p>{person.lastName}</p>
        </div>
        <div className="contact">
            <p>{person.email}</p>
            <p>{person.phone}</p>
            <p>{person.adress}</p>
        </div>
        </>
    );
}