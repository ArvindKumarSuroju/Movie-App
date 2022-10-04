import { Box, Center, CheckIcon, Select } from "native-base";
import React, { useEffect, useState } from "react";
import { getTvShows } from "../services/api";

const TVDropdown = () => {
  const [service, setService] = useState("popular");

  useEffect(() => {
    getTvShows(service);
    // console.log(service);
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
          <Select.Item label="airing today" value="airing_today" />
          <Select.Item label="on the air" value="on_the_air" />
          <Select.Item label="popular" value="popular" />
          <Select.Item label="top_rated" value="top_rated" />
        </Select>
      </Box>
    </Center>
  );
};

export default TVDropdown;
