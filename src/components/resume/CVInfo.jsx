export default function CVInfo({objects}) {

  const info = objects.map((object) => (
    <div key={object.id} className="info">
      {Object.keys(object).map((key) => {
        if (key !== "id" && key !== "StartDate" && key !== "EndDate") {
          return (
            <p key={key} className={key}>{object[key]}</p>
          )
        } else if (key === "StartDate") {
          return (
            <p key={key} className="Date">{object.StartDate} - {object.EndDate}</p>
          )
        }
        return null;
      })}
    </div>
  ));
  
  return (
    <>
      {info}
    </>
  );
}