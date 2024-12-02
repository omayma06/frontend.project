import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./YouCan.css";

const EducationDomainSelector = ({ onSubmit }) => {
  const [selectedDomains, setSelectedDomains] = useState([]);
  const educationDomains = [
    "Artificial Intelligence and Machine Learning",
    "Software Development",
    "Cybersecurity",
    "Data Analysis",
    "Project Management",
    "Data Engineering",
    "Data Science",
    "Mobile App Development",
    "User Experience (UX/UI) Design",
    "Information Technology Management",
    "Digital Marketing",
    "Quantitative Finance",
    "Risk Management",
    "Operations Management",
    "Software Engineering",
    "Medicine and Public Health",
    "Human Resources Management",
    "Electrical and Electronic Engineering",
    "Financial Analysis",
    "Web Development",
    "Computer-Aided Design (CAD)",
    "Embedded Systems",
    "Supply Chain Management",
    "Environmental Science",
    "Cloud Computing",
    "Analytics Marketing",
    "Mechanical Engineering",
    "Quality Management",
    "Industrial Design",
    "E-commerce",
    "Logistics Management",
    "Agile Project Management",
    "Augmented/Virtual Reality",
    "Renewable Energy",
    "Graphic Design",
    "Business Intelligence",
    "Computer Architecture",
    "Geographic Information Systems (GIS)",
    "Technical Writing",
    "Sustainable Development",
    "Cryptography and Data Security",
    "Database Management",
    "Customer Relationship Management (CRM)",
    "Supply Chain Management",
    "Nursing and Healthcare",
    "Video Game Development",
    "Knowledge Management",
    "Online Education and Distance Learning",
    "Network Infrastructure Management",
    "Predictive Analytics",
    "Internet of Things (IoT)",
    "Computer Programming",
    "Sustainable Development",
    "Product Management",
    "Biomedicine",
    "Innovation Management",
    "Emergency and Crisis Management",
    "Chemical Engineering",
    "Content Marketing",
    "Air and Water Quality Management",
    "Embedded Software Development",
    "Serious Games Design",
    "Business Administration",
    "IT Project Management",
    "Product Design",
    "Mechatronics",
    "Business Law and Commercial Law",
    "Market Trend Analysis",
    "Civil Engineering and Infrastructure",
    "Information and Records Management",
    "Fashion Design",
    "Special Education",
    "Financial Risk Analysis",
    "Natural Resource Management",
    "Blockchain Application Development",
    "Industrial and Organizational Psychology",
    "Biotechnological Engineering",
    "Public Health Analysis",
    "Wealth Management and Investment",
    "Digital Anthropology",
    "Health Program Management",
    "Artificial Intelligence Ethics",
    "Intercultural Competence Development",
    "Influence Marketing",
    "Public Administration and Policy Management",
    "Emerging Technology Management",
    "Computational Linguistics",
    "Aerospace Engineering",
    "Interior Design",
    "Market Demand Analysis",
    "Construction Project Management",
    "Food Safety and Sustainable Agriculture",
    "Health Data Analytics",
    "Sustainability and Environmental Management",
    "Regenerative Medicine",
    "Social Media Management",
    "Robotics and Automation",
    "Organizational Performance Management",
    "Brand Management and Positioning",
    "Construction Project Management",
  ];
  const navigate = useNavigate();

  // Gérer le changement dans les domaines d'éducation sélectionnés
  const handleSelectChange = (e) => {
    setSelectedDomains(Array.from(e.target.selectedOptions, (option) => option.value));
  };

  // Soumettre les domaines d'éducation sélectionnés
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedDomains);
  };

  // Rediriger vers la page précédente
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="form-container mt-5">
      <h2 style={{ color: "black" }}>What do you want to learn?</h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="educationDomains" className="form-label">
            Which domain do you want to inquire about?
          </label>
          <br/>
          <br/>
          <select
            className="custom-select-lg"
            id="educationDomains"
            name="educationDomains"
            multiple
            value={selectedDomains}
            onChange={handleSelectChange}
          >
            {educationDomains.map((domain, index) => (
              <option key={index} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="btn btn-secondary m-3"
          onClick={() => navigate("/my-profile")}
        >
          Back
        </button>
      </form>
      <br/>
      <div className="alert alert-danger m-1" role="alert">
        <h4 style={{ color: "black" }}>Sorry</h4>
        <p style={{ color: "black" }}>
          Our courses are not ready at the moment, but don't worry, they will be
          ready later.
        </p>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default EducationDomainSelector;
