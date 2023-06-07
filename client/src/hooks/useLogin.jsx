import useAuthContext from "./useAuthContext";
import axios from "axios";
export const useLogin = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const { setLogin } = useAuthContext();

  const login = async (email, password) => {
    const response = await axios.post(`${baseUrl}/user/login`, {
      email,
      password,
    });
    if (response.status === 200) {
      setLogin(response.data);
      console.log(response);
    } else {
      console.log(response);
    }
  };

  return { login };
};
