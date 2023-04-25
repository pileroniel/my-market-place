import { Flex,  Heading, HStack} from "@chakra-ui/react";
import './navbar.css'
import  Yalelogo from '../../assets/images/Yale_design2.png'
import {Cart3, PersonCircle} from 'react-bootstrap-icons'
import { NavLink } from "react-router-dom";

function navbar(){


    return (
      <div className="cont">
        <Flex
          direction={"row"}
          justify={"space-around"}
          width={"100%"}
          height="100%"
          margin={"auto"}
        >
          <NavLink to="/market">
          <HStack className="leftBar" >
            <img src={Yalelogo} height="95px" width="90px" alt="Yale Logo" />
            <Heading
              id="home"
              color={"#132a37"}
              margin={"auto auto 0 auto"}
              size="xl"
            >
              MarketPlace
            </Heading>
          </HStack>
          </NavLink>
          <ul className="rightBar">
            <li>
              <NavLink className="navOption" to="/market">
                Market
              </NavLink>
            </li>
            <li>
              <NavLink className="navOption" to="/sell">
                Rent/Sell
              </NavLink>
            </li>
            <li>
              <NavLink className="navOption " to="/wishlist">
                <HStack>
                  {/* <span className="innerIcon"> Cart </span> */}
                  <Cart3 size={25} color="#26546f" />
                </HStack>
              </NavLink>
            </li>
            <li>
              <NavLink className="navOption " to="/profile">
                <HStack>
                  {/* <span className="innerIcon"> Profile </span> */}
                  <PersonCircle size={35} color="#26546f" />
                </HStack>
              </NavLink>
            </li>
          </ul>
        </Flex>
      </div>
    );
}

export default navbar;