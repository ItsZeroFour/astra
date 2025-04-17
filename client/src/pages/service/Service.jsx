import React from "react";
import Head from "../../components/service/head/Head";
import Gallery from "../../components/service/gallery/Gallery";
import Info from "../../components/service/info/Info";
import Other from "../../components/service/other/Other";

const Service = () => {
  return (
    <React.Fragment>
      <Head />
      <Gallery />
      <Info />
      <Other />
    </React.Fragment>
  );
};

export default Service;
