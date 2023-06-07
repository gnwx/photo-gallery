import axios from "axios";
const useUpload = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const token = sessionStorage.getItem("JWT");
  const uploadFile = async (photo) => {
    const formData = new FormData();
    formData.append("photoURL", photo);

    await axios.post(`${baseUrl}image/upload`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return { uploadFile };
};

export default useUpload;
