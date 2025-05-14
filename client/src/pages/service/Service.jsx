import React, { useEffect, useState } from "react";
import Head from "../../components/service/head/Head";
import Gallery from "../../components/service/gallery/Gallery";
import Info from "../../components/service/info/Info";
import Other from "../../components/service/other/Other";
import { useParams } from "react-router-dom";
import NotFoud from "../404/NotFoud";

const Service = ({ services }) => {
  const [service, setService] = useState(null);
  const [otherServies, setOtherServies] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filterItems = services.filter((item) => item.url === id)[0];

    setService(filterItems);
  }, [services, id]);

  useEffect(() => {
    const filterItems = services.filter((item) => item.url !== id).slice(0, 4);

    setOtherServies(filterItems);
  }, [services, id]);

  console.log(otherServies);

  return (
    <React.Fragment>
      {service ? (
        <React.Fragment>
          <Head service={service} />
          <Gallery service={service} />
          <Info service={service} />
          <Other otherServies={otherServies} />
        </React.Fragment>
      ) : (
        <NotFoud />
      )}
    </React.Fragment>
  );
};

export default Service;
