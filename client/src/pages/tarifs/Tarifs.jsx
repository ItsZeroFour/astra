import React, { useEffect, useState } from "react";
import Head from "../../components/tarifs/head/Head";
import Company from "../../components/tarifs/company/Company";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const Tarifs = () => {
  const [tarifs, setTarifs] = useState(null);
  const [listOfTarifs, setListOfTarifs] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tarify

  useEffect(() => {
    const fetchTarifs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/tarify?populate=*"
        );

        setTarifs(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchTarifs();
  }, []);

  useEffect(() => {
    const fetchTarifs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/spisok-tarifovs?populate=*"
        );

        setListOfTarifs(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchTarifs();
  }, []);

  return (
    <React.Fragment>
      {tarifs && listOfTarifs ? (
        <React.Fragment>
          <Head tarifs={tarifs} listOfTarifs={listOfTarifs} />
          <Company tarifs={tarifs} />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default Tarifs;
