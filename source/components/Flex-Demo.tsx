import { Box, Text } from 'ink'
import React from 'react'

const FlexDemo = () => {
    return (
        <>
            <Box>
                <Text>Label:</Text>
                <Box flexGrow={1}>
                    <Text>Fills all remaining space</Text>
                </Box>
            </Box>
            <Box width={20}>
                <Box flexShrink={2} width={10}>
                    <Text>Will be 1/4</Text>
                </Box>
                <Box width={10}>
                    <Text>Will be 3/4</Text>
                </Box>
            </Box>
            <Box width={2} flexWrap="wrap">
                <Text>A</Text>
                <Text>BC</Text>
            </Box>
        </>
    )
}

export default FlexDemo