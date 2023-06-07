import React, { useState } from "react";
import useUpload from "../hooks/useUpload";
import { Button, useDisclosure } from "@chakra-ui/react";
import { customTheme } from "../helpers/theme";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AddIcon, AttachmentIcon } from "@chakra-ui/icons";
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
      <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme="brand">
        Add Image
      </Button>
      <Modal theme={customTheme} isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleUpload}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="brand.600">Upload Image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Button
                as="label"
                htmlFor="file-input"
                leftIcon={<AttachmentIcon />}
                colorScheme="brand"
                variant="outline"
              >
                Upload File
              </Button>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={(e) => handleChange(e)}
                style={{ display: "none" }}
              />
            </ModalBody>
            <ModalFooter gap={3}>
              <Button type="submit" color="brand.900">
                Upload
              </Button>
              <Button colorScheme="brand" mr={3} onClick={onClose}>
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
