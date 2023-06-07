import axios from "axios";
import useFeedBack from "./useFeedback";

const useUpload = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { feedback } = useFeedBack();

  const token = sessionStorage.getItem("JWT");

  const uploadFile = async (photo) => {
    try {
      const formData = new FormData();
      formData.append("photoURL", photo);

      const response = await axios.post(`${baseUrl}image/upload`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      feedback("Success", response.data.message, "success", 2000);
    } catch (error) {
      feedback("Error", error.response.data.message, "error", 2000);
    }
  };

  return { uploadFile };
};

export default useUpload;
