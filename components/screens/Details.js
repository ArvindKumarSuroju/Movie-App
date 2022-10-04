import { BASE_URL } from "../services/api_config";
import { useEffect, useState } from "react";
import { API_KEY } from "../services/api_config";
import axios from "axios";
import {
  Box,
  Center,
  HStack,
  StatusBar,
  Text,
  FlatList,
  Image,
  VStack,
  Button,
} from "native-base";
import { IMAGE_URL } from "../services/api_config";

const Details = (props, route) => {
  const { id, type } = props.route.params;
  const [info, setInfo] = useState("");
  // const [imagePath, setImagePath] = useState("");

  const getDetails = async () => {
    const url = `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&page=1`;

    // console.log(url);
    try {
      const response = await axios.get(url).catch(console.log);
      // console.log(response.data);
      // return response.data;
      setInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getImage = async () => {
  //   const url = `${IMAGE_URL}${info.poster_path}`;

  //   // console.log(url);
  //   try {
  //     const response = await axios.get(url).catch(console.log);
  //     // console.log(response.data);
  //     // return response.data;
  //     setImagePath(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getDetails();
    // getImage();
  }, [id]);

  let imagePath = `${IMAGE_URL}${info.poster_path}`;
  console.log(imagePath);
  let release_date = "";
  if (type == "movie") {
    release_date = info.release_date;
  } else {
    release_date = info.first_air_date;
  }
  return (
    <>
      {/* <Text>Hello</Text> */}
      <Box margin={10}>
        <VStack>
          <Center>
            <Text mb={10} fontSize={25} fontWeight="bold">
              {info.original_title}
            </Text>
            <Image source={{ uri: imagePath }} alt="Poster" size="2xl" />
            <Text mt={10} mb={10}>
              {info.overview}
            </Text>
          </Center>
          <HStack>
            <Text>Popularity: {info.popularity}</Text>
            <Text> | </Text>
            <Text>Release Date: {release_date}</Text>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Details;
