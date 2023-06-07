import { Button } from "@chakra-ui/react";
const LinkButton = ({ children, handleClick }) => {
  return (
    <Button variant="link" color="brand.300" onClick={handleClick}>
      {children}
    </Button>
  );
};
export default LinkButton;
