import React, { useState } from "react";
import {
  Card,
  Button,
  Text,
  Stack,
  Divider,
  Image,
  Heading,
  CardBody,
  CardFooter,
  ButtonGroup,
  HStack,
  Tag,
  Flex,
  CloseButton,
  VStack,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import "bootstrap";
import { BookmarkPlus} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import './index.css'


function Item(props) {
  //this will contain the arguments name, details, price, tag, option to rent or sell
  const [clickState, setclickState] = useState(false)

 

  
   return (
     <div>
       <Card className="before-click" maxW="260" maxH="fit-content">
         <CardBody>
           <Image
             src={props.image}
             alt={props.alt}
             borderRadius="lg"
             height={"175px"}
             width={"100%"}
             objectFit="cover"
           />

           <Stack mt="6" spacing="3">
             <Flex wrap={"wrap"} width="100%" justify={"space-between"}>
               <Heading size="md" wordBreak={"normal"}>
                 {props.name}
               </Heading>
               <HStack>
                 {/*     <Tag
                     variant={"subtle"}
                     colorScheme="blue"
                     color={"black"}
                     fontWeight="300"
                   >
                     #{props.tag}
                   </Tag> */}
                 <Tag
                   variant={"subtle"}
                   colorScheme={props.option === "rent" ? "blue" : "orange"}
                   fontWeight="300"
                 >
                   #{props.option}
                 </Tag>
               </HStack>
             </Flex>
             <Text>
               {" "}
               <b>Details: </b> {props.detail}
             </Text>
             <Text color="blue.600" fontSize="2xl">
               ${props.price}
               {props.rate}
             </Text>
           </Stack>
         </CardBody>
         <Divider />
         <CardFooter>
           <ButtonGroup spacing="2">
             <Button
               variant="solid"
               colorScheme="blue"
               onClick={() => setclickState(true)}
             >
               More Info
             </Button>
             <Button variant="ghost" colorScheme="blue">
               Add to Cart
             </Button>
           </ButtonGroup>
         </CardFooter>
       </Card>

       {/* The following sets whether to view the product on more info or not if that button is clicked */}
       {clickState ? (
         <Flex className="overlay">
           <Card
             className="enlarge"
             w="calc(fit-content + 50px)"
             maxH="fit-content"
             m={"auto"}
             size={"lg"}
           >
             <HStack
               width={"90%"}
               m={"10px auto 0 auto"}
               justifyContent={"space-between"}
             >
               <Heading>
                 {`Seller's ${props.name}`}
                 {/* {`${props.seller}'s ${props.name}`} */}
               </Heading>
               <CloseButton
                 margin={"5px "}
                 onClick={() => {
                   setclickState(false);
                 }}
               />
             </HStack>

             <CardBody>
               <HStack gap={"20px"}>
                 <VStack width={"150px"} height={"100%"} gap={"15px"}>
                   <Box>
                     <Image
                       src={props.image}
                       alt={props.alt}
                       borderRadius="lg"
                       height={"200px"}
                       width={"200px"}
                       objectFit="cover"
                     />
                   </Box>

                   <HStack height={"20px"}>
                     <NavLink>
                       <Button
                         variant="solid"
                         colorScheme="blue"
                         size={""}
                         padding={"8px"}
                         rightIcon={""}
                         borderRadius={"2px"}
                         /* onClick={() => setclickState(true) }  */
                       >
                         {/* we'll link this to the seller's message inbox  */}
                         Contact {props.seller}
                       </Button>
                     </NavLink>

                     <NavLink>
                       <BookmarkPlus
                         size={"26px"}
                         color="#3182CE"
                         onClick={() => {
                           console.log("Cliked");
                         }}
                       >
                         {/* We'll have an add to cart functionality here */}
                       </BookmarkPlus>
                     </NavLink>
                   </HStack>
                 </VStack>

                 <TableContainer>
                   <Table size={"lg"} width={"80%"}>
                     <Tbody>
                       <Tr>
                         <Td>
                           <Text color="black" fontWeight={"bold"}>
                             Product
                           </Text>
                         </Td>
                         <Td>{props.name}</Td>
                       </Tr>
                       <Tr>
                         <Td>
                           <Text color="black" fontWeight={"bold"}>
                             Price
                           </Text>
                         </Td>
                         <Td>
                           <Text color="black.600">
                             ${props.price}
                             {props.rate}
                           </Text>
                         </Td>
                       </Tr>
                       <Tr>
                         <Td>
                           <Text color="black" fontWeight={"bold"}>
                             Category
                           </Text>
                         </Td>
                         <Td>
                           <HStack
                             width={"100%"}
                             align="start"
                             justify={"start"}
                           >
                             <Tag
                               variant={"subtle"}
                               colorScheme="blue"
                               color={"black"}
                               fontWeight="300"
                             >
                               #{props.tag}
                             </Tag>
                             <Tag
                               variant={"subtle"}
                               colorScheme="orange"
                               fontWeight="300"
                             >
                               #{props.option}
                             </Tag>
                           </HStack>
                         </Td>
                       </Tr>
                       <Tr>
                         <Td>
                           <Text color="black" fontWeight={"bold"}>
                             Seller Name
                           </Text>
                         </Td>
                         <Td>
                           <Text>{props.seller}</Text>
                         </Td>
                       </Tr>
                       <Tr>
                         <Td>
                           <Text color="black" fontWeight={"bold"}>
                             Seller UserName
                           </Text>
                         </Td>
                         <Td>
                           <Text>{props.username}</Text>
                         </Td>
                       </Tr>
                       <Tr>
                         <Td>
                           <Text color="black" fontWeight={"bold"}>
                             Contact Info
                           </Text>
                         </Td>
                         <Td>
                           <Text>{props.contact}</Text>
                         </Td>
                       </Tr>
                       <Tr>
                         <Td>
                           <Text color="black" fontWeight={"bold"}>
                             Description
                           </Text>
                         </Td>
                         <Td>
                           <Text>{props.description}</Text>
                         </Td>
                       </Tr>
                     </Tbody>
                   </Table>
                 </TableContainer>
               </HStack>
             </CardBody>
           </Card>
         </Flex>
       ) : (
         <div className="hide">
          {'should not appear'}
         </div>
       )}
     </div>
   );
}





export default Item;
