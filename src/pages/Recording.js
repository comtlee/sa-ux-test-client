import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../config/domain";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Video from "../components/Statics/Video";

const Recording = () => {
  const [video, setVideo] = useState([]);

  const params = useParams();
  const { id: projectId } = params;

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(
          `${DOMAIN}/tests/${JSON.stringify(projectId)}/videolist`,
          {
            header: { "content-type": "multipart/form-data" },
          },
        );

        setVideo(response.data.tests[0].video);
      } catch (error) {
        throw Error(error);
      }
    };
    axiosData();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Video videolist={video} />
    </>
  );
};

export default Recording;
