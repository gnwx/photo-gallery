import React from "react";
import { Image } from "@chakra-ui/react";

const ImageCard = ({ image }) => {
  return (
    <Image
      sx={{
        borderRadius: "8px",
        mt: 10,
        width: "400px",
        height: "400px",
        objectFit: "cover",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      src={image}
    />
  );
};

export default ImageCard;
