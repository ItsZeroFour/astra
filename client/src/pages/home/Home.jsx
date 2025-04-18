import React from "react";
import Head from "../../components/home/head/Head";
import About from "../../components/home/about/About";
import Advantages from "../../components/home/advantages/Advantages";
import CompletedWorks from "../../components/home/completed_works/CompletedWorks";

const Home = ({ services, completedWorks }) => {
  return (
    <React.Fragment>
      <Head />
      <About />
      <Advantages services={services} />
      <CompletedWorks completedWorks={completedWorks} />
    </React.Fragment>
  );
};

export default Home;
