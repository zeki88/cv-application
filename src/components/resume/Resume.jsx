import React, { useState } from 'react';
import HeaderInfo from '../header/HeaderInfo';
import ExperienceInfo from '../experience/ExperienceInfo';
import EducationInfo from '../education/EducationInfo';
import HeaderSection from '../common/HeaderSection';

export default function CV({ person, school, company }) {

  return (
    <>

      <div className="personalInfo">
      <HeaderInfo person={person} />
      </div>
    <div className="info">
    <HeaderSection title="Education" />
      <div className="educationInfo">
      <EducationInfo school={school} />
      </div>

      <HeaderSection title="Experience" />
      <div className="experienceInfo">
      <ExperienceInfo company={company} />
      </div>
    </div>

    </>
  );
}