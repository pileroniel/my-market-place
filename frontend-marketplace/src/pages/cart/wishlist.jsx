import axios from "axios";
import { Flex, HStack } from "@chakra-ui/react";
import Spinner from 'react-bootstrap/Spinner'
import { useEffect, useState } from "react";
import React from "react";
import WishItem from "./cart-item/WishItem";
import calc from '../../assets/images/calc.jpg'
import { VStack } from "@chakra-ui/react";
let api = axios.create({
  baseURL:'http://localhost:3000/wishlist'
})

export default function Wishlist() {

  const [data2,setData] = useState(null)
  const [loading, setLoading]=useState(true)
  const [error, errMessage]=useState(null)

  const data = [
    {
      seller: "Ron",
      name: "Comfy Party Sofa",
      price: "15",
      option: "sell",
      rate: "week",
      contact: "",
      image: calc,
    },
    {
      seller: "Ananya",
      name: "Lamp",
      price: "10",
      option: "rent",
      rate: "week",
      contact: "",
      image: calc,
    },
    {
      seller: "Ali ",
      name: "Vacuum Cleaner",
      price: "8",
      option: "rent",
      rate: "hr",
      contact: "",
      image: calc,
    },
    {
      seller: " Irene ",
      name: "Iron Sheet",
      price: "2",
      option: "sell",
      rate: "hr",
      contact: "",
      image: calc,
    },
    {
      seller: " Neel ",
      name: "Calculator",
      price: "14",
      option: "rent",
      rate: "day",
      contact: "",
      image: calc,
    },
  ];
  
  
  // useEffect(( ) =>{
  // const getData = async ()=>{
  //   try{
  //     const response = await api.get('/')

  //     setData(response.data)
  //     console.log(response.data)
  //     errMessage(null)

  //   }catch(err){

  //     errMessage(err.message)
  //     console.log(err.message)
  //     setData(null)
  //   }
  //   finally{
  //     setLoading(false)
  //   }
  //   getData()
  // }},[])

  return (
    <VStack rowGap={'20px'} >
      {loading && (
        <Flex /* w={'100vw'}
        h={'100vh'} */
          placeItems={"center"}
          p={"0"}
          m={"0"}
        >
          {/* <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> */}
        </Flex>
      )}

      {error && <h1> {`Error Message${error}`}</h1>}

      {data &&
        data.map((item) => (
          <WishItem
            key={item.seller}
            seller={item.seller}
            name={item.name}
            image={item.image}
            option={item.option}
            price={item.price}
            rate={item.rate}
            
          />
        ))}
    </VStack>
  );
}
