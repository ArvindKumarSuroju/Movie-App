import React from "react";
import { View } from "react-native";
import {Box, Center, Text } from "native-base";
import MoviesDropDown from "../containers/MoviesDropdown";


const Movies = () => {
return (
	<Box>
		<Center>
			<MoviesDropDown />
		</Center>
	</Box>
);
};

export default Movies;
