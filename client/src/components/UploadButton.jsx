import React, { useState } from "react";
import useUpload from "../hooks/useUpload";
import { Button, Input, useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const UploadButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [photo, setPhoto] = useState();
  const { uploadFile } = useUpload();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    uploadFile(photo);
  };
  return (
    <>
      <Button onClick={onOpen}>Upload Image</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleUpload}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload Image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleChange(e)}
              />
            </ModalBody>
            <ModalFooter gap={3}>
              <Button type="submit">Upload</Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default UploadButton;
