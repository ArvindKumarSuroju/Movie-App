import { Box, Center, CheckIcon, Select } from "native-base";
import React, { useEffect, useState } from "react";
import { getTvShows } from "../services/api";

const TVDropdown = (props) => {
  useEffect(() => {
    getTvShows(props.service);
    // console.log(service);
  }, [props.service]);

  return (
    <Center>
      <Box maxW="300">
        <Select
          selectedValue={props.service}
          minWidth="200"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={5}
          mb={5}
          onValueChange={(itemValue) => props.setService(itemValue)}
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
