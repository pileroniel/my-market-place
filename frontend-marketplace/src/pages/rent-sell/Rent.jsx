import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  VStack,
  HStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import './index.css'


const Rent = () => {
 



  return (
    <div className="m-right">
      <Heading marginLeft={"0"}>New Product</Heading>
      <FormControl isRequired marginLeft={"100px"} marginTop={"10"}>
        <Flex>
          <VStack gap={"5"} w={"600px"}>
            <HStack gap={"10"}>
              <FormLabel width={"150px"}>Name of Product</FormLabel>
              <Input width={"450px"} padding={"0"} />
            </HStack>
            <HStack gap={"10"}>
              <FormLabel width={"150px"}>Price</FormLabel>
              <Input width={"450px"} padding={"0"} />
            </HStack>
            <HStack gap={"10"}>
              <FormLabel width={"150px"}>Category</FormLabel>
              <Input width={"450px"} padding={"0"} />
            </HStack>
            <HStack gap={"10"}>
              <FormLabel width={"150px"}>Your Name</FormLabel>
              <Input width={"450px"} padding={"0"} />
            </HStack>
            <HStack gap={"10"}>
              <FormLabel width={"150px"}>Your UserName</FormLabel>
              <Input width={"450px"} padding={"0"} />
            </HStack>
            <HStack gap={"10"}>
              <FormLabel width={"150px"}>Contact Info</FormLabel>
              <Input width={"450px"} padding={"0"} />
            </HStack>
            <HStack gap={"10"}>
              <FormLabel width={"150px"}>Description</FormLabel>
              <Input width={"450px"} padding={"0"} />
            </HStack>
            <HStack gap={"10"}>
              <FormLabel width={"150px"}>Image Link</FormLabel>
              <Input width={"450px"} padding={"0"} />
            </HStack>
            <HStack>
              <Button colorScheme='blue' variant={'solid'} type="submit">Create Listing</Button>
              <Button type="submit">Cancel</Button>
            </HStack>
          </VStack>
        </Flex>
      </FormControl>
    </div>
  );
}

export default Rent