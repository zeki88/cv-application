import './App.css'
import Header from './components/header/Header.jsx'
import CreateForm from './components/form/CreateForm.jsx'
import Button from './components/common/Button.jsx'
import CV from './components/resume/CV.jsx';
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {


  const [person, setPerson] = useState({ FirstName: "John", LastName: "Doe", Email: "johndoe@gmail.com", Phone: "123-456-7890", Adress: "Buenos Aires, BA" });
  function onChange (e) {
    console.log(e.target.className);
    setPerson({ ...person, [e.target.className]: e.target.value });
  };

  function onEdit () {
    setPerson({ ...person, Show: true });
  };

  const [school, setSchool] = useState([
    { id: crypto.randomUUID(), School: "Universidad Nacional José C. Paz", Degree: "Licenciatura en Informática", StartDate: "01/01/2021", EndDate: "01/01/2024", Location: "Buenos Aires, BA", Show: false },
    { id: crypto.randomUUID(), School: "Universidad Nacional General Sarmiento", Degree: "Licenciatura en Informática", StartDate: "01/01/2021", EndDate: "01/01/2024", Location: "Buenos Aires, BA", Show: false }
  ]);
  
  const [company, setCompany] = useState([
    { id: crypto.randomUUID(), Name: "Buryburgers", Position: "Cocinero", StartDate: "01/01/2021", EndDate: "01/01/2024", Location: "Buenos Aires, BA", Description: "Preparaba hamburguesas kosher", Show: false },
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
    setSchool([...school, { id: crypto.randomUUID(), School: "", Degree: "", StartDate: "", EndDate: "", Location: "", Show: true }]);
  }
  

  function addCompany() {
    setCompany([...company, { id: crypto.randomUUID(), Name: "", Position: "", StartDate: "", EndDate: "", Location: "", Description: "", Show: true }]);
  }
  
  function removeSchool(id) {
    setSchool(school.filter(singleSchool => singleSchool.id !== id));
  }
  
  function removeCompany(id) {
    setCompany(company.filter(singleCompany => singleCompany.id !== id));
  }


  function handleEditSchool(id) {
    setSchool(school.map(singleSchool =>
      singleSchool.id === id ? { ...singleSchool, Show: true } : singleSchool
    ));
  }

  function handleEditCompany(id) {
    setCompany(company.map(singleCompany =>
      singleCompany.id === id ? { ...singleCompany, Show: true } : singleCompany
    ));
  }

  function handleOnCloseSchool(id) {
      setSchool(school.map(singleSchool =>
        singleSchool.id === id ? { ...singleSchool, Show: false } : singleSchool
      ));
  }

  function handleOnCloseCompany(id) {
    setCompany(company.map(singleCompany =>
      singleCompany.id === id ? { ...singleCompany, Show: false } : singleCompany
    ));
  }

  const getLastElement = (array) => {
    return console.log(array[array.length - 1])
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

function clear() {
  setPerson({ FirstName: "", LastName: "", Email: "", Phone: "", Adress: "", Show: true });
  setSchool([]);
  setCompany([]);
}

  return (
    <>
    <div className="App">
    <div className="container">
    <div className="buttons">
    <Button label="Download" onClick={generatePDF} className="download" />
    <Button label="Clear" onClick={clear} className="clear" />
    </div>
        <Header person={ person } onChange={onChange} onEdit={onEdit} />
        <CreateForm object={school} title="Education" onChange={onSchoolChange} onDelete={removeSchool} onClick={addSchool} onEdit={handleEditSchool} onNoEdit={handleOnCloseSchool}/>
        <CreateForm object={company} title="Experience" onChange={onCompanyChange} onDelete={removeCompany} onClick={addCompany} onEdit={handleEditCompany}/>
    </div>
    <div id="cv" className="CV">
    <CV person={person} school={school} company={company} />
    </div>
    </div>
    </>
  )
}

export default App
