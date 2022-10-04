import { Box, Center, Text } from "native-base";

const SearchWithoutResults = () => {
  return (
    <>
      <Box>
        <Center>
          <Text
            fontWeight="bold"
            fontSize={25}
            justifyContent="center"
            mt={150}
          >
            Please initiate the search
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default SearchWithoutResults;
