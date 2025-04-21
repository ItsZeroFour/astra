import React, { useEffect, useState } from "react";
import Head from "../../components/services/head/Head";
import List from "../../components/services/list/List";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const Services = ({ services }) => {
  const [servicesItems, setServicesItems] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}/api/stranicza-uslug?populate=*`
        );

        setServicesItems(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <React.Fragment>
      {servicesItems ? (
        <React.Fragment>
          <Head servicesItems={servicesItems} />
          <List services={services} />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default Services;
