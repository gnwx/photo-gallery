import axios from "axios";
import { useState } from "react";
import useFeedBack from "./useFeedback";

const useGetImages = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { feedback } = useFeedBack();

  const token = sessionStorage.getItem("JWT");

  const getImages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseUrl}image/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setImages(response.data.presignedUrls);
      setIsLoading(false);
    } catch (error) {
      feedback(
        "Error",
        "Failed to fetch images. Please try again.",
        "error",
        2000
      );
      setIsLoading(false);
    }
  };

  return { images, getImages, isLoading };
};

export default useGetImages;
