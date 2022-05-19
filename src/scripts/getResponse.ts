export default async function getResponse(prompt: string) {
	const data = {
		prompt: prompt,
		temperature: 0.5,
		max_tokens: 32,
	};

	try {
		const res = await fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST',
				'X-Content-Type-Options': 'nosniff',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
			},
			body: JSON.stringify(data),
		});
		const json = await res.json();
		return json.choices[0].text as string;
	} catch (err) {
		return Promise.resolve('I am sorry, I am not able to answer your question at this time.');
	}
}
