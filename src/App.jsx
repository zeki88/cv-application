import './App.css'
import Header from './components/header/Header.jsx'
import Education from './components/education/Education.jsx'
import Experience from './components/experience/Experience.jsx'
import Button from './components/common/Button.jsx'
import CV from './components/resume/Resume.jsx';
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {


  const [person, setPerson] = useState({ firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "123-456-7890", adress: "Buenos Aires, BA" });
  function onChange (e) {
    console.log(e.target.className);
    setPerson({ ...person, [e.target.className]: e.target.value });
  };

  const [school, setSchool] = useState([
    { id: crypto.randomUUID(), schoolName: "Universidad Nacional José C. Paz", degree: "Licenciatura en Informática", startDate: "01/01/2021", endDate: "01/01/2024", location: "Buenos Aires, BA" },
    { id: crypto.randomUUID(), schoolName: "Universidad Nacional General Sarmiento", degree: "Licenciatura en Informática", startDate: "01/01/2021", endDate: "01/01/2024", location: "Buenos Aires, BA" }
  ]);
  
  const [company, setCompany] = useState([
    { id: crypto.randomUUID(), companyName: "Buryburgers", position: "Cocinero", startDate: "01/01/2021", endDate: "01/01/2024", location: "Buenos Aires, BA", description: "Preparaba hamburguesas kosher" }
  ]);

  function onSchoolChange(e, id) {
    setSchool(school.map(singleSchool => 
      singleSchool.id === id ? { ...singleSchool, [e.target.name]: e.target.value } : singleSchool
    ));
  }
  
  function onCompanyChange(e, id) {
    setCompany(company.map(singleCompany => 
      singleCompany.id === id ? { ...singleCompany, [e.target.name]: e.target.value } : singleCompany
    ));
  }

  function addSchool() {
    setSchool([...school, { id: crypto.randomUUID(), schoolName: "", degree: "", startDate: "", endDate: "", location: "" }]);
    console.log(school);
  }
  

  function addCompany() {
    setCompany([...company, { id: crypto.randomUUID(), companyName: "", position: "", startDate: "", endDate: "", location: "", description: "" }]);
  }
  
  function removeSchool(id) {
    setSchool(school.filter(singleSchool => singleSchool.id !== id));
  }
  
  function removeCompany(id) {
    setCompany(company.filter(singleCompany => singleCompany.id !== id));
  }


function generatePDF() {
  const cvElement = document.getElementById("cv");

  html2canvas(cvElement, { scale: 4 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg", 1);
    const pdf = new jsPDF("p", "pt", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      0,
      imgWidth * ratio,
      imgHeight * ratio
    );

    pdf.save(`${person.firstName}_${person.lastName}_cv.pdf`);
  });
}

/*function generatePDF() {
  const cvElement = document.getElementById("cv");

  html2canvas(cvElement, {
    scale: 4,
    useCORS: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 190;
    const pageHeight = 290;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 10;

    pdf.addImage(imgData, "JPEG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${person.firstName}_${person.lastName}_cv.pdf`);
  });
}*/

  return (
    <>
    <div className="App">
    <div>
    <Button label="Download" onClick={generatePDF} className="download" />
        <Header person={ person } onChange={onChange} />
        <Education school={school} onChange={onSchoolChange} onAdd={addSchool} onDelete={removeSchool} />
        <Button
          label="Save"
          className="save"
          type="button"
          onClick={addSchool}
        />
        <Experience company={company} onChange={onCompanyChange} onAdd={addCompany} onDelete={removeCompany} />
        <Button
              label="Save"
              className="save"
              type="button"
              onClick={addCompany}
            />
    </div>
    <div id="cv" className="CV">
    <CV person={person} school={school} company={company} />
    </div>
    </div>
    </>
  )
}

export default App
