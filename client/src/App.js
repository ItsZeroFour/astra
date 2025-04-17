import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/contacts/Contacts";
import Tarifs from "./pages/tarifs/Tarifs";
import Service from "./pages/service/Service";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
