import React, { useEffect } from "react";
import Head from "../../components/completed_works/head/Head";
import List from "../../components/completed_works/list/List";

const CompletedWorks = ({ completedWorks }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Head />
      <List completedWorks={completedWorks} />
    </React.Fragment>
  );
};

export default CompletedWorks;
