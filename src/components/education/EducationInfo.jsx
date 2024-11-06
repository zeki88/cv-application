export default function EducationInfo({school}) {
    return (
        school.map((singleSchool) => (
            <div key={singleSchool.id} className="schoolInfo">
              <p className="infoName">{singleSchool.schoolName}</p>
              <p className="degree">{singleSchool.degree}</p>
              <p className="schoolDate">{singleSchool.startDate} - {singleSchool.endDate}</p>
              <p className="schoolLocation">{singleSchool.location}</p>
            </div>
          ))
    );
}