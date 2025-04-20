import React, { useEffect, useState } from "react";
import Head from "../../components/completed_works/head/Head";
import List from "../../components/completed_works/list/List";
import Loader from "../../components/loader/Loader";
import axios from "axios";

const CompletedWorks = ({ completedWorks }) => {
  const [completedWorksItems, setCompletedWorksItems] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchCompletedWorks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/stranicza-vypolnennyh-rabot?populate=*"
        );

        setCompletedWorksItems(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchCompletedWorks();
  }, []);

  console.log(completedWorksItems);

  return (
    <React.Fragment>
      {completedWorksItems ? (
        <React.Fragment>
          <Head completedWorksItems={completedWorksItems} />
          <List completedWorks={completedWorks} />
        </React.Fragment>
      ) : (
        <Loader></Loader>
      )}
    </React.Fragment>
  );
};

export default CompletedWorks;
