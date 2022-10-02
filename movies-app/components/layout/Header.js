import { Box, HStack, StatusBar, Text } from 'native-base'

const Header = () => (
  <>
    <StatusBar backgroundColor='#FD7F20' barStyle='light-content' />
    <Box safeAreaTop backgroundColor='#FD7F20'>
      <HStack bg='#FD7F20' px={1} py={3} alignItems='center' justifyContent='center'>
        <Text color='#fff' fontSize={20} fontWeight='bold'>
          Movies App
        </Text>
      </HStack>
    </Box>
  </>
)

export default Header;