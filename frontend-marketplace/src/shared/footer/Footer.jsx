import Yale from '../../assets/images/Yale.png'
import { Center,  HStack, Text } from '@chakra-ui/react'
import './footer.css'

function footer()
{
    return (
      <Center className="footer">
        <HStack direction="column" gap={"10px"}>
          <img src={Yale} alt="Yale Logo" />
          <Text size="sm" color="black" fontWeight={"400"}>
            &copy; 2023 All Rights Reserved | Yale University
          </Text>
        </HStack>
      </Center>
    );
} 

export default footer;