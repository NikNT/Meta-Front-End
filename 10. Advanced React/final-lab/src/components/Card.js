import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="white" borderRadius="xl" color="black">
      <Image src={imageSrc} borderRadius="lg"></Image>
      <VStack spacing={4} p={4} alignItems="flex-start">
        <Heading size="md">{title}</Heading>
        <Text color="#64748b" fontSize="sm">
          {description}
        </Text>
        <HStack fontSize="sm" as="b" textAlign="left">
          <Text color="black" fontSize="sm">
            See More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
        </HStack>
      </VStack>
    </VStack>
    // <VStack
    //   color="black"
    //   backgroundColor="white"
    //   cursor="pointer"
    //   borderRadius="xl"
    // >
    //   <Image src={imageSrc} alt={title} borderRadius="xl" />
    //   <VStack spacing={4} alignItems="flex-start" p={5}>
    //     <Heading as="h4" size="md">
    //       {title}
    //     </Heading>
    //     <Text color="#64748b" fontSize="lg">
    //       {description}
    //     </Text>
    //     <HStack fontSize="md" fontWeight="medium">
    //       <p>See more</p>
    //       <FontAwesomeIcon icon={faArrowRight} size="1x" />
    //     </HStack>
    //   </VStack>
    // </VStack>
  );
};

export default Card;
