import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Button } from "@chakra-ui/react";

const UserCard = () => {
  const { user, logOut } = useAuthContext();
  return (
    <div>
      Welcome, {user.name}
      <Button onClick={logOut}>Logout</Button>
    </div>
  );
};

export default UserCard;
