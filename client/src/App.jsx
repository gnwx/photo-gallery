import { useState } from "react";
import ImageLayout from "./components/ImageLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import UploadButton from "./components/UploadButton";
import useAuthContext from "./hooks/useAuthContext";
import { Box, Container, Stack } from "@chakra-ui/react";
import UserCard from "./components/UserCard";
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useAuthContext();
  return (
    <Container sx={{ display: "flex", justifyContent: "center", mt: 40 }}>
      {!user && (
        <>
          {isLogin && <Login setIsLogin={setIsLogin} />}
          {!isLogin && <Register setIsLogin={setIsLogin} />}
        </>
      )}
      {user && (
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <UserCard />
            <UploadButton />
          </Stack>
          <ImageLayout />
        </Box>
      )}
    </Container>
  );
}

export default App;
