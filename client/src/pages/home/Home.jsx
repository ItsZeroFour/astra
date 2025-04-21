import React, { useEffect, useState } from "react";
import Head from "../../components/home/head/Head";
import About from "../../components/home/about/About";
import Advantages from "../../components/home/advantages/Advantages";
import CompletedWorks from "../../components/home/completed_works/CompletedWorks";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const Home = ({ services, completedWorks, targetRef }) => {
  const [home, setHome] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}/api/glavnaya?populate=*`
        );

        setHome(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <React.Fragment>
      {!home ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Head
            head_title={home.head_title}
            head_text={home.head_text}
            head_images={home.head_images}
          />
          <About
            about_title={home.about_title}
            about_text={home.about_text}
            about_image={home.about_image}
            about_item_1_title={home.about_item_1_title}
            about_item_1_text={home.about_item_1_text}
            about_item_1_icon={home.about_item_1_icon}
            about_item_2_title={home.about_item_2_title}
            about_item_2_text={home.about_item_2_text}
            about_item_2_icon={home.about_item_2_icon}
            about_item_3_title={home.about_item_3_title}
            about_item_3_text={home.about_item_3_text}
            about_item_3_icon={home.about_item_3_icon}
            about_item_4_title={home.about_item_4_title}
            about_item_4_text={home.about_item_4_text}
            about_item_4_icon={home.about_item_4_icon}
            targetRef={targetRef}
          />
          <Advantages
            services={services}
            advantages_title={home.advantages_title}
            advantages_item_1_text={home.advantages_item_1_text}
            advantages_item_1_icon={home.advantages_item_1_icon}
            advantages_item_2_text={home.advantages_item_2_text}
            advantages_item_2_icon={home.advantages_item_2_icon}
            advantages_item_3_text={home.advantages_item_3_text}
            advantages_item_3_icon={home.advantages_item_3_icon}
            advantages_item_4_text={home.advantages_item_4_text}
            advantages_item_4_icon={home.advantages_item_4_icon}
            advantages_item_5_text={home.advantages_item_5_text}
            advantages_item_5_icon={home.advantages_item_5_icon}
          />
          <CompletedWorks completedWorks={completedWorks} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
