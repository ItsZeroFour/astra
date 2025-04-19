import React, { useEffect } from "react";
import Head from "../../components/tarifs/head/Head";
import Company from "../../components/tarifs/company/Company";

const Tarifs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Head />
      <Company />
    </React.Fragment>
  );
};

export default Tarifs;
