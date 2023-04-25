
import {
  VStack,
  HStack,
  Img,
  Tag,
  Text,
  Button,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";


const WishItem = ({image,alt,seller, name,price, option, rate,contact }) => {



  return (
    <HStack
      maxW={"700px"}
      w={"100%"}
      p={"20px 15px 15px 15px"}
      borderRadius={"lg"}
      boxShadow={"2px 2px 4px #bbb"}
      justifyContent={"space-between"}
      
    >
      <HStack>
        <Img
          src={image}
          alt={alt}
          borderRadius="lg"
          height={"150px"}
          width={"100px"}
          objectFit="cover"
        />
        <VStack align={"flex-start"} paddingLeft={"15px"} rowGap={"5px"}>
          <Text fontSize="2xl" as="b">
            {seller.trim()}'s {name}
          </Text>

          <Text fontSize={"lg"} color={"#3182CE"}>
            ${price}/{rate}
          </Text>
          <Tag
            variant={"subtle"}
            colorScheme={option === "rent" ? "blue" : "orange"}
            fontWeight="300"
          >
            #{option}
          </Tag>
        </VStack>
      </HStack>

      <ButtonGroup height={"100%"} display={"flex"} flexDirection={'row'} justifyContent={'end'}>
        <Button marginTop={"80%"} onClick={() => {}}>
          Remove
        </Button>
      </ButtonGroup>
    </HStack>
  );
}

export default WishItem