import React, { useState } from "react";
import useSignIn from "../hooks/useRegister";
import { Input, Button, Box, Stack, Container } from "@chakra-ui/react";
import { handleChange } from "../helpers/inputChange";
import LinkButton from "./LinkButton";
const Register = ({ setIsLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSignIn();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(name, email, password);
  };
  const handleClick = () => {
    setIsLogin(true);
  };

  return (
    <form onSubmit={handleSignIn}>
      <Stack spacing={4} sx={{ width: 300 }}>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e) => handleChange(e, setName)}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => handleChange(e, setEmail)}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => handleChange(e, setPassword)}
        />

        <LinkButton handleClick={handleClick}>Login</LinkButton>
        <Button type="submit" width={100}>
          Register
        </Button>
      </Stack>
    </form>
  );
};

export default Register;
