import React, { useState } from 'react';
import { Box, Newline, Text, useInput, useApp } from 'ink';
import Truncate from './components/Truncate.js';
import Guideline from './components/Guideline.js';
import FlexDemo from './components/Flex-Demo.js';
import ClassicBorder from './components/ClassicBorder.js';
import StaticExample from './components/Static-Example.js';
import ArrayExample from './components/Array.js';
import GradientExample from './components/Gradient.js';
import TextInput from './components/cursor.js';
import Loader from './components/Loader.js';

type Props = {
	name: string | undefined;
};

export default function App({ name = 'Stranger' }: Props) {
	const [Counter, setCounter] = useState(0);
	const { exit } = useApp();

	useInput((input, key) => {
		if (key.ctrl && input == 'c') {
			exit();
		}
		else if (input == "w") {
			setCounter(Counter + 1);
		}
		else if (input == "s") {
			setCounter(Counter - 1);
		}
		else if (input == "r") {
			setCounter(0);
		}
		else if (input == "q") {
			exit();
		}

	})
	return (
		<>
			<Guideline />
			<Box gap={1} flexDirection="column" margin={1} borderStyle="round" borderColor="gray">
				<Text>
					Hello, <Text color="green">{name}</Text>
				</Text>
				<Text>
					welcome to the app
					<Newline />
					<Text color="blue">
						Simple Counter App
					</Text>
				</Text>
				<Box marginTop={1} marginBottom={1}>
					<Text color="cyan" bold backgroundColor="gray">
						{Counter}
					</Text>
				</Box>
			</Box>
			<Truncate />
			<FlexDemo />
			<ClassicBorder />
			<ArrayExample />
			<Loader />
			<StaticExample />
			<GradientExample />
			<TextInput />
		</>
	);
}
