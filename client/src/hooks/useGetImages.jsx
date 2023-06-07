import axios from "axios";
import { useState } from "react";

const useGetImages = () => {
  const [images, setImages] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const token = sessionStorage.getItem("JWT");
  const getImages = async () => {
    const response = await axios.get(`${baseUrl}image/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setImages(response.data);
  };

  return { images, getImages };
};

export default useGetImages;
