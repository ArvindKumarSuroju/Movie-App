
import { Select , Box, CheckIcon, Center} from "native-base";
import React from "react";

const MoviesDropDown = () => {

    const [service, setService] = React.useState("");
    return <Center>
        <Box maxW="300">
          <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" 
          placeholder="popular" 
          
          _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" 
         />
        }} mt={5} mb = {5} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="now playing" value="now-playing" />
            <Select.Item label="popular" value="popular" />
            <Select.Item label="top rated" value="top-rated" />
            <Select.Item label="upcoming" value="upcoming" />
          </Select>
        </Box>
      </Center>;

}

export default MoviesDropDown;