import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useLogin } from "./hooks/useLogin";
import useAuthContext from "./hooks/useAuthContext";
import useGetImages from "./hooks/useGetImages";
import useUpload from "./hooks/useUpload";
function App() {
  const [photo, setPhoto] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const { getImages, images } = useGetImages();
  const { uploadFile } = useUpload();
  const { user } = useAuthContext();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const token = sessionStorage.getItem("JWT");
  const handleUpload = (e) => {
    e.preventDefault();
    uploadFile(photo);
  };
  const handleGetImages = () => {
    getImages();
  };
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      {user}
      {images && images.map((image) => <img src={image} />)}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>

      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={(e) => handleChange(e)} />
        <button type="submit">upload</button>
      </form>

      <button onClick={handleGetImages}>getImages</button>
    </>
  );
}

export default App;
