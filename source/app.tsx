import React, { useState } from 'react';
import { Box, Newline, Text, useInput } from 'ink';

type Props = {
	name: string | undefined;
};

export default function App({ name = 'Stranger' }: Props) {
	const [Counter, setCounter] = useState(0);

	useInput((input, key) => {
		if (key.ctrl && input == 'c') {
			process.exit(0);
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
			process.exit(0);
		}

	})
	return (
		<>
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
						Press <Text strikethrough color="yellow">r</Text> to reset
					</Text>
					<Newline />
					<Text>
						Press <Text bold color="magenta">q</Text> to quit
					</Text>
				</Text>
			</Box>
			<Box flexDirection="column" margin={1} borderStyle="round" borderColor="gray">
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
		</>
	);
}
