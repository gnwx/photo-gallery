import { useToast } from "@chakra-ui/react";

const useFeedBack = () => {
  const toast = useToast();
  const feedback = (title, description, status, duration) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
    });
  };

  return { feedback };
};

export default useFeedBack;
