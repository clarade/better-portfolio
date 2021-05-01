import { Flex, Box, Link, Text } from "rebass";

function Navigation() {
    return (
        <>
            <Flex px={4} color="#7CA982">
                <Text
                    p={2}
                    fontWeight="bold"
                    fontFamily="ArgestaDisplay-Regular"
                    fontSize="3em"
                >
                    Clarade
                </Text>
                <Box mx="auto" />
                <Link variant="nav" href="/about">
                    About
                </Link>
            </Flex>
            <hr class="solid" />
        </>
    );
}

export default Navigation;
