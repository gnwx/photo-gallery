import axios from "axios";
import useFeedBack from "./useFeedback";

const useSignIn = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { feedback } = useFeedBack();

  const signIn = async (name, email, password) => {
    try {
      const response = await axios.post(`${baseUrl}user/signin`, {
        name,
        email,
        password,
      });
      if (response.status === 201 || response.data.success) {
        feedback("Sign Up Successful", response.data.message, "success", 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        feedback("Error", error.response.data.message, "error", 2000);
      } else {
        feedback(
          "Error",
          "An error occurred during sign up. Please try again.",
          "error",
          2000
        );
      }
    }
  };

  return { signIn };
};

export default useSignIn;
