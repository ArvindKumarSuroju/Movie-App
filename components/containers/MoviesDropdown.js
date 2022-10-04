import { Select, Box, CheckIcon, Center } from "native-base";
import React from "react";

const MoviesDropDown = (props) => {
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
