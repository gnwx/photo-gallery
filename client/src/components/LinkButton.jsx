import { Button } from "@chakra-ui/react";
const LinkButton = ({ children, handleClick }) => {
  return (
    <Button variant="link" onClick={handleClick}>
      {children}
    </Button>
  );
};
export default LinkButton;
