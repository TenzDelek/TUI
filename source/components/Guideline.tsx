import React from 'react'
import { Box, Text, Newline } from 'ink';

const Guideline = () => {
    return (
        <Box flexDirection="row">
            <Text>
                <Text>
                    Press <Text italic color="green">w</Text> to increment
                </Text>
                <Newline />
                <Text>
                    Press <Text underline color="red">s</Text> to decrement
                </Text>
                <Newline />
                <Text>
                    Press <Text strikethrough dimColor color="yellow">r</Text> to reset
                </Text>
                <Newline />
                <Text>
                    Press <Text inverse backgroundColor={"green"} color="magenta">q</Text> to quit
                </Text> {/* Invert background and foreground colors. */}
            </Text>
        </Box>
    )
}

export default Guideline