import React from 'react'
import { Box, Text } from 'ink';

const Truncate = () => {
    return (
        <Box borderStyle="classic" paddingX={2} flexDirection="column" borderColor="gray">
            <Box width={7}>
                <Text>Hello World</Text>
            </Box>

            <Box width={7}>
                <Text wrap="truncate">Hello World</Text>
            </Box>

            <Box width={7}>
                <Text wrap="truncate-middle">Hello World</Text>
            </Box>

            <Box width={7}>
                <Text wrap="truncate-start">Hello World</Text>
            </Box>
        </Box>
    )
}

export default Truncate