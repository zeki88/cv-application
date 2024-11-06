export default function ExperienceInfo({company}) {
    return (
        company.map((singleCompany) => (
            <div key={singleCompany.id} className="companyInfo">
              <p className="infoName">{singleCompany.companyName}</p>
              <p className="position">{singleCompany.position}</p>
              <p className="companyDate">{singleCompany.startDate} - {singleCompany.endDate}</p>
              <p className="companyLocation">{singleCompany.location}</p>
              <p className="companyDescription">{singleCompany.description}</p>
            </div>
          ))
    );
}