import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/contacts/Contacts";
import Tarifs from "./pages/tarifs/Tarifs";
import Service from "./pages/service/Service";
import axios from "axios";
import CompletedWorks from "./pages/completed_works/CompletedWorks";
import Services from "./pages/services/Services";
import AboutWork from "./pages/about_work/AboutWork";
import Loader from "./components/loader/Loader";
import NotFoud from "./pages/404/NotFoud";

function App() {
  const [services, setServices] = useState(null);
  const [completedWorks, setCompletedWorks] = useState(null);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}/api/uslugis?populate=*`
        );
        setServices(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}/api/vypolnennye-raboties?populate=*`
        );
        setCompletedWorks(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}/api/kontakty?populate=*`
        );
        setContacts(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchContacts();
  }, []);

  const targetRef = useRef(null);

  const handleClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="page">
        {services && completedWorks && contacts ? (
          <React.Fragment>
            <Header
              services={services}
              logo={contacts?.logo.url}
              handleClick={handleClick}
            />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      services={services}
                      completedWorks={completedWorks}
                      targetRef={targetRef}
                      handleClick={handleClick}
                    />
                  }
                />
                <Route
                  path="/kontakty"
                  element={<Contacts contacts={contacts} />}
                />
                <Route path="/tarify" element={<Tarifs />} />
                <Route
                  path="/uslugi"
                  element={<Services services={services} />}
                />
                <Route
                  path="/completed-works"
                  element={<CompletedWorks completedWorks={completedWorks} />}
                />
                <Route
                  path="/:id"
                  element={<Service services={services} />}
                />
                <Route
                  path="/work/:id"
                  element={<AboutWork completedWorks={completedWorks} />}
                />

                <Route path="*" element={<NotFoud />} />
              </Routes>
            </main>
            <Footer contacts={contacts} handleClick={handleClick} />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default App;
