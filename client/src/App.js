import React, { useState, useEffect } from "react";
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

function App() {
  const [services, setServices] = useState(null);
  const [completedWorks, setCompletedWorks] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/uslugis?populate=*"
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
          "http://localhost:1337/api/vypolnennye-raboties?populate=*"
        );
        setCompletedWorks(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="App">
      <div className="page">
        {services && completedWorks ? (
          <React.Fragment>
            <Header services={services} />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home services={services} completedWorks={completedWorks} />
                  }
                />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/tarifs" element={<Tarifs />} />
                <Route
                  path="/services"
                  element={<Services services={services} />}
                />
                <Route
                  path="/completed-works"
                  element={<CompletedWorks completedWorks={completedWorks} />}
                />
                <Route
                  path="/service/:id"
                  element={<Service services={services} />}
                />
                <Route
                  path="/work/:id"
                  element={<AboutWork completedWorks={completedWorks} />}
                />
              </Routes>
            </main>
            <Footer />
          </React.Fragment>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </div>
  );
}

export default App;
