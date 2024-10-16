// app/api/generate-banner/route.js

import Replicate from 'replicate';

export async function POST(request) {
	const test_output = {
		completed_at: '2024-09-10T12:37:29.087400Z',
		created_at: '2024-09-10T12:37:27.820000Z',
		data_removed: false,
		error: null,
		id: '0tswz6tthhrm60chvfr94yh7r4',
		input: {
			prompt:
				'"Create a professional banner with a sleek, modern design. In the center, add the words \'Innovate, Lead, Inspire.\' in bold, clean, sans-serif font. Place the text slightly off-center to the right, leaving space on the left. The font color should be white with a subtle shadow for contrast. Keep the overall tone corporate but approachable."',
			num_outputs: 1,
			aspect_ratio: '21:9',
			output_format: 'webp',
			output_quality: 80
		},
		logs: 'Using seed: 33524\n0it [00:00, ?it/s]\n1it [00:00,  8.51it/s]\n2it [00:00,  5.99it/s]\n3it [00:00,  5.45it/s]\n4it [00:00,  5.23it/s]\n4it [00:00,  5.52it/s]\nTotal safe images: 1 out of 1',
		metrics: {
			image_count: 1,
			predict_time: 1.258922654,
			total_time: 1.2674
		},
		output: [
			'https://replicate.delivery/yhqm/0EqFZai9XZpCPxUS6TaLFkBxRytIkezARmzfcmdlx5dIe92mA/out-0.webp'
		],
		started_at: '2024-09-10T12:37:27.828477Z',
		status: 'succeeded',
		urls: {
			get: 'https://api.replicate.com/v1/predictions/0tswz6tthhrm60chvfr94yh7r4',
			cancel:
				'https://api.replicate.com/v1/predictions/0tswz6tthhrm60chvfr94yh7r4/cancel'
		},
		version: '8dab33aa91741c2c07274f97d926b0606b6c38416a8a83fdc8f336512cdd88cf'
	};

	const { prompt } = await request.json();

	const replicate = new Replicate({
		auth: process.env.REPLICATE_API_TOKEN
	});

	try {
		const output = await replicate.run('black-forest-labs/flux-dev', {
			input: {
				prompt: prompt,
				output_format: 'png',
				disable_safety_checker: true,
				guidance: 3.5,
				num_outputs: 1,
				aspect_ratio: '21:9',
				output_quality: 80,
				prompt_strength: 0.8,
				num_inference_steps: 28
			}
		});

		return new Response(JSON.stringify({ output }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error generating banner:', error);
		return new Response(JSON.stringify({ error: 'Error generating banner' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
