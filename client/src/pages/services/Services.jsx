import React from "react";
import Head from "../../components/services/head/Head";
import List from "../../components/services/list/List";

const Services = ({ services }) => {
  return (
    <React.Fragment>
      <Head />
      <List services={services} />
    </React.Fragment>
  );
};

export default Services;
