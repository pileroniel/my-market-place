import Form from './LoginForm'
import './login.css'
import {
    Flex,
    Box,
} from '@chakra-ui/react'


function loginPage()
{
    return (
      <Box className="ripple-background">
        <Flex
          position={"relative"}
          zIndex={"10"}
          direction={"row"}
          align={"center"}
          justify={"center"}
          height={"100%"}
          width={"100%"}
        >
             
            <Form />
         
        </Flex>

        <Box className="circle xxlarge shade1" />
        <Box className="circle xlarge shade2" />
        <Box className="circle large shade3" />
        <Box className="circle mediun shade4" />
        <Box className="circle small shade5" />
      </Box>
    );


}

export default loginPage;