import React from 'react'
import { Box, Text } from 'ink'

const ArrayExample = () => {
    const items = ['a', 'b', 'c'];

    return (
        <Box flexDirection="column">
            {items.map((item, index) => (
                <Box key={index}>
                    <Text>Item: {item}</Text>
                </Box>
            ))}
        </Box>
    )
}

export default ArrayExample