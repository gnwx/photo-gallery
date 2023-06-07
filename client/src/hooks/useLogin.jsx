import useAuthContext from "./useAuthContext";
import axios from "axios";
import useFeedBack from "./useFeedback";

const useLogin = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const { setLogin } = useAuthContext();
  const { feedback } = useFeedBack();

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${baseUrl}user/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        setLogin(response.data);
        feedback(
          "You're logged in successfully!",
          `Welcome, ${response.data.user.name}!`,
          "success",
          2000
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        feedback(
          "Wrong credentials",
          error.response.data.message,
          "warning",
          2000
        );
      } else {
        feedback(
          "Error",
          "An error occurred during login. Please try again.",
          "error",
          2000
        );
      }
    }
  };

  return { login };
};

export default useLogin;
