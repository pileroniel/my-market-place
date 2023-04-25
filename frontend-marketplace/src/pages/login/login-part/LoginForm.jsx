import { Flex } from "@chakra-ui/react";

function Form()
{
   const handleSubmit = (e)=> {
     // Redirect to the CAS login page
     window.location.href =
       "https://secure.its.yale.edu/cas/login?redirect=https%3A%2F%2Fwww.google.com%2Fcatalog&service=https%3A%2F%2Fwww.google.com";
   }
  return (
    <Flex direction={"column"} >
      <h1>Welcome to Yale Market Place</h1>
      <input type="text" id="NetID" name="NetID" placeholder="Net ID" /> 
      <button id="login-button" onClick={handleSubmit}>Log In</button>
    </Flex>
  )
}

export default Form


//Commented code that failed lol
// import {
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Input,
//   Box,
// } from "@chakra-ui/react";

// import { useState } from "react";
     //set a state for validating the form input
    //const [input,setInput]= useState('')

    // const handleInput = (e)=> setInput (e.target.value)

    // const handleSubmit = (e)=> {
        
    //     window.location.href =
    //       "https://secure.its.yale.edu/cas/login?redirect=https%3A%2F%2Fwww.google.com%2Fcatalog&service=https%3A%2F%2Fwww.google.com"
    // }
    //const inputErr = input.trim() == '' //check if input is empty
   


    //   <Box
    //     colorScheme="white"
    //     bg={"blue"}
    //     borderRadius={"lg"}
    //     variant={"elevated"}
    //     zIndex={"12"}
    //     position={"relative"}
    //     height={"200px"}
    //     width={"200px"}
    //   >
        
    //       <FormControl id="form" isInvalid={inputErr} onSubmit={handleSubmit}>
    //         <Input
    //           type={"text"}
    //           value={input}
    //           onChange={handleInput}
    //           name={"NetID"}
    //           id={"netID"}
    //           placeholder="Net ID"
    //         />
    //         {!inputErr ? (
    //           <FormHelperText></FormHelperText>
    //         ) : (
    //           <FormErrorMessage>Your NetID is required</FormErrorMessage>
    //         )}

    //         <Input
    //           id="login-button"
    //           type={"submit"}
    //           value="Submit"
    //           colorScheme={"blue"}
    //           variant={"solid"}
    //         />
    //       </FormControl>
       
    //   </Box>