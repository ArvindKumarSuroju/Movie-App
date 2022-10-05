import { BASE_URL } from "../services/api_config";
import { useEffect, useState } from "react";
import { API_KEY } from "../services/api_config";
import axios from "axios";
import { Box, Center, HStack, Text, Image, VStack } from "native-base";
import { IMAGE_URL } from "../services/api_config";
import Loading from "../layout/Loading";

const Details = (props) => {
  const { id, type } = props.route.params;
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getDetails = async () => {
    const url = `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&page=1`;

    try {
      const response = await axios.get(url).catch(console.log);
      setInfo(response.data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  let imagePath = `${IMAGE_URL}${info.poster_path}`;

  let release_date = "";
  if (type == "movie") {
    release_date = info.release_date;
  } else {
    release_date = info.first_air_date;
  }
  return (
    <>
      {isLoading ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
