import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WhoAreWe from "./components/Who are we";
import ContactUs from "./components/ContactUs";
import LoginPage from "./components/LoginPage";
import MyProfile from "./components/MyProfile";
import PersonalInfoForm from "./components/PersonalInfoForm";
import SkillsForm from "./components/SkillsForm";
import EducationDomainSelector from "./components/EducationDomainSelector";
import FinalPage from "./components/FinalPage";
import RequestList from "./components/RequestList";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./components/YouCan.css";
import "./App.css";

function App() {
  return (
    <div className="app" data-testid="app-component">
      <Routes>
        {/* Routes for new users */}
        <Route path="/" element={<HomePage />} />
        <Route path="/who-are-we" element={<WhoAreWe />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<PersonalInfoForm />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/skills-form" element={<SkillsForm />} />
        <Route path="/education-domain-selector" element={<EducationDomainSelector />} />
        <Route path="/final-page" element={<FinalPage />} />

        {/* Routes for existing users */}
        <Route path="/login-existing-user" element={<LoginPage />} />
        <Route path="/register-existing-user" element={<PersonalInfoForm />} />
        <Route path="/my-profile-existing-user" element={<MyProfile />} />
        <Route path="/skills-form-existing-user" element={<SkillsForm />} />
        <Route path="/education-domain-selector-existing-user" element={<EducationDomainSelector />} />
        <Route path="/final-page-existing-user" element={<FinalPage />} />

        {/* Routes for the administrator */}
        <Route path="/login-admin" element={<LoginPage />} />
        <Route path="/request-list" element={<RequestList />} />
      </Routes>
    </div>
  );
}

export default App;
