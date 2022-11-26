import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { DOMAIN } from "../config/domain";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Video from "../components/Statics/Video";

const Recording = () => {
  const params = useParams();
  const { id: projectId } = params;

  const getVideoList = async () => {
    return await fetch(`${DOMAIN}/tests/${JSON.stringify(projectId)}/videolist`)
      .then((response) => response.blob())
      .then((blob) => URL.createObjectURL(blob));
  };

  const { data, isError } = useQuery("getVideoList", getVideoList, {
    initialData: "",
  });

  if (isError) {
    throw new Error("Error");
  }
  const video = data;

  return (
    <>
      <Header />
      <Navbar />
      {video && <Video video={video} />}
    </>
  );
};

export default Recording;
