import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Button, Input, Stack } from "@chakra-ui/react";
import { handleChange } from "../helpers/inputChange";
import LinkButton from "./LinkButton";
const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleClick = () => {
    setIsLogin(false);
  };
  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={4} sx={{ width: 300 }}>
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => handleChange(e, setEmail)}
        />
        <Input
          type="text"
          placeholder="Password"
          onChange={(e) => handleChange(e, setPassword)}
        />

        <LinkButton handleClick={handleClick}>Register</LinkButton>
        <Button type="submit">Login</Button>
      </Stack>
    </form>
  );
};

export default Login;
