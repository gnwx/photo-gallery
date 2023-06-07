import React, { useEffect } from "react";
import useGetImages from "../hooks/useGetImages";
import ImageCard from "./ImageCard";
import { Box, CircularProgress } from "@chakra-ui/react";

const ImageLayout = () => {
  const { getImages, images, isLoading } = useGetImages();

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Box sx={{ mt: 20 }}>
      {isLoading && <CircularProgress />}
      {images.length === 0 && <div>There is no image to show</div>}

      {images &&
        images.map((image, idx) => <ImageCard image={image} key={idx} />)}
    </Box>
  );
};

export default ImageLayout;
