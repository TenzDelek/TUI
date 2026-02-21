import { Box, Text } from 'ink'
import React from 'react'

const ClassicBorder = () => {
    return (
        <Box
            borderColor="green"
            alignItems="center"
            justifyContent="center"
            borderStyle={{
                topLeft: '↘',
                top: '↓',
                topRight: '↙',
                left: '→',
                bottomLeft: '↗',
                bottom: '↑',
                bottomRight: '↖',
                right: '←'
            }}
        >
            <Text backgroundColor="white">
                "Be kind whenever possible. It is always possible." - Dalai Lama
            </Text>
        </Box>)
}

export default ClassicBorder