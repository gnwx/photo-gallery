import { useState } from "react";
import ImageLayout from "./components/ImageLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import UploadButton from "./components/UploadButton";
import useAuthContext from "./hooks/useAuthContext";
import { Container } from "@chakra-ui/react";
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useAuthContext();
  return (
    <Container sx={{}}>
      {!user && (
        <>
          <Login setIsLogin={setIsLogin} />

          <Register setIsLogin={setIsLogin} />
        </>
      )}
      {user && (
        <>
          <UploadButton />
          <ImageLayout />
        </>
      )}
    </Container>
  );
}

export default App;
