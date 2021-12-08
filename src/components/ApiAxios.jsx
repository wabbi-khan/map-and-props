import React, { useState } from "react";
import Axios from "axios";
const ApiAxios = () => {
	const [joke, setjoke] = useState([]);
	const getJoke = async () => {
		const result = await Axios.get("https://v2.jokeapi.dev/joke/Any?amount=5");
		console.log(
			result.data.jokes[0].setup + "..." + result.data.jokes[0].delivery
		);

		setjoke(result.data.jokes[0].setup + "..." + result.data.jokes[0].delivery);
		// setjoke(result.data.jokes.setup);
		// setjoke(result.joke.setup);
	};

	return (
		<div>
			hello <button onClick={getJoke}>jokes</button>
			{joke}
		</div>
	);
};

export default ApiAxios;
