import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

const TextInput = () => {
    const [text, setText] = useState('');
    useInput((input, key) => {
        if (key.backspace || key.delete) {
            setText(text.slice(0, -1));
        } else if (key.return) {
            setText('');
        } else if (!key.ctrl && !key.meta && !key.escape) {
            setText(text + input);
        }
    });

    const prompt = '> ';

    return (
        <Box flexDirection="column" marginTop={1}>
            <Text color="cyan">Type something (press Enter to clear):</Text>
            <Text>
                <Text color="green">{prompt}</Text>
                {text}
                <Text inverse> </Text>
            </Text>
        </Box>
    );
};

export default TextInput;