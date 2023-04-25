import Item from "./Item";
import  vacuum_cleaner from "../../../../assets/images/vacuum_cleaner.jpg";
import lamp from "../../../../assets/images/lamp.jpg";
import iron_sheet from "../../../../assets/images/iron-sheet.jpg";
import sofa from "../../../../assets/images/sofa.jpg";
import calc from "../../../../assets/images/calc.jpg";
import microwave from "../../../../assets/images/microwave.jpg";

import { Flex } from "@chakra-ui/react";
function ItemList(){

  return (
    <Flex
      direction="row"
      gap={50}
      maxW={"80vw"}
      width={"fit-content"}
      height="max-content"
      flexWrap={"wrap"}
      justify={"center"}
      margin="20px auto"
    >
      <Item
        image={sofa}
        alt="Sofa"
        detail="Lorem ipsum ordor omet Lorem ipsum ordor omet"
        name="Comfy Party Sofa"
        price="15.75"
        option="rent"
        rate="/week"
        tag="room"
        more={false}
      />
      <Item
        image={lamp}
        alt="Lamp"
        detail="Lorem ipsum ordor omet Lorem ipsum ordor omet"
        name="Lamp"
        price="2.75"
        rate="/day"
        option="sell"
        tag="lamp"
        more={false}
      />

      <Item
        image={vacuum_cleaner}
        alt="Vacuum Cleaner"
        detail="Lorem ipsum ordor omet Lorem ipsum ordor omet"
        name="Vacuum Cleaner"
        price="7.75"
        rate="/day"
        option="rent"
        tag="room"
        seller=""
        username=""
        contact=""
        description=""
      />
      <Item
        image={iron_sheet}
        alt="Iron Sheet"
        detail="Lorem ipsum ordor omet Lorem ipsum ordor omet"
        name="Iron Sheet"
        price="8.75"
        rate="/day"
        option="rent"
        tag="clothing"
        seller=""
        username=""
        contact=""
        description=""
      />
      <Item
        image={calc}
        alt="Calculator"
        detail="Lorem ipsum ordor omet Lorem ipsum ordor omet"
        name="Calculator"
        price="3.75"
        rate="/hr"
        option="sell"
        tag="school"
        seller=""
        username=""
        contact=""
        description=""
      />
      <Item
        image={microwave}
        alt="Mircrowave"
        detail="Lorem ipsum ordor omet Lorem ipsum ordor omet"
        name="Mircro-wave"
        price="20.75"
        rate="/week"
        option="sell"
        tag="kitchen"
        seller=""
        username=""
        contact=""
        description=""
      />
    </Flex>
  );
}

export default ItemList;