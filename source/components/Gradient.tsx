import React from 'react';
import { Box } from 'ink';
import Gradient from 'ink-gradient';

const GradientExample = () => {
    return (
        <Box flexDirection="column" marginTop={1}>
            <Gradient name="rainbow">
                Hello, colorful world!
            </Gradient>
            <Gradient name="pastel">
                This is a pastel gradient
            </Gradient>
            <Gradient name="cristal">
                Crystal gradient text
            </Gradient>
        </Box>
    )
}

export default GradientExample