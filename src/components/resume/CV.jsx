import HeaderInfo from '../header/HeaderInfo';
import CVInfo from './CVInfo';
import HeaderSection from '../common/HeaderSection';

export default function CV({ person, school, company }) {

  return (
    <>

      <div className="personalInfo">
      <HeaderInfo person={person} />
      </div>
    <div className="infoContainer">
    <HeaderSection title="Education" />
      <div className="educationInfo">
      <CVInfo objects={school} />
      </div>

      <HeaderSection title="Experience" />
      <div className="experienceInfo">
      <CVInfo objects={company} />
      </div>
    </div>

    </>
  );
}