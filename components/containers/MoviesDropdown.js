import { Select, Box, CheckIcon, Center } from "native-base";
import React, { useEffect, useState } from "react";
import { getMovies } from "../services/api";

const MoviesDropDown = () => {
  const [service, setService] = useState("popular");

  useEffect(() => {
    getMovies(service);
    console.log(service);
  }, [service]);

  return (
    <Center>
      <Box maxW="300">
        <Select
          selectedValue={service}
          minWidth="200"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={5}
          mb={5}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="now playing" value="now_playing" />
          <Select.Item label="popular" value="popular" />
          <Select.Item label="top rated" value="top_rated" />
          <Select.Item label="upcoming" value="upcoming" />
        </Select>
      </Box>
    </Center>
  );
};

export default MoviesDropDown;
