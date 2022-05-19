import { Configuration, OpenAIApi } from 'openai';

export default function getResponse(prompt: string) {
	const data = {
		prompt: prompt,
		temperature: 0.5,
		max_tokens: 32,
	};

	// const config = new Configuration({
	// 	apiKey: import.meta.env.VITE_OPENAI_API_KEY,
	// });

	// const openai = new OpenAIApi(config);
	// const choicesPromise = (async () => {
	// 	const completion = await openai.createCompletion('“text-curie-001', data);
	// 	return completion.data.choices;
	// })();

	// choicesPromise.then((choices) => {
	// 	if (choices) {
	// 		console.log(choices[0].text);
	// 	}
	// });

	fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
		method: 'POST',
		headers: {
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
		},
		body: JSON.stringify(data),
	});

	return prompt + ': ' + Date.now();
}
