import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Head from "../../components/about_work/head/Head";
import NotFoud from "../404/NotFoud";
import Gallery from "../../components/about_work/gallery/Gallery";
import Info from "../../components/about_work/info/Info";
import Other from "../../components/about_work/other/Other";

const AboutWork = ({ completedWorks }) => {
  const [work, setWork] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filterItems = completedWorks.filter((item) => item.id === +id)[0];

    setWork(filterItems);
  }, [completedWorks, id]);

  console.log(work);

  return (
    <React.Fragment>
      {work ? (
        <React.Fragment>
          <Head work={work} />
          <Gallery work={work} />
          <Info work={work} />
        </React.Fragment>
      ) : (
        <NotFoud />
      )}
    </React.Fragment>
  );
};

export default AboutWork;
