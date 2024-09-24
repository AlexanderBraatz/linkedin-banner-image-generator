'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QRCode from 'qrcode';

import Circles from './Circles.jsx';

export default function BannerGenerator() {
	const [output, setOutput] = useState(null);
	const [prompt, setPrompt] = useState('');
	const [qRcodeSrc, setQRcodeSrc] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();
	const generateBanner = async e => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const response = await fetch(
				'http://localhost:3000/api/generate-banner',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ prompt })
				}
			);

			if (!response.ok) {
				throw new Error('Failed to generate banner');
			}
			if (response) {
				const data = await response.json();
				if (data) {
					setOutput(data.output);
					QRCode.toDataURL(data.output[0], {
						version: 5, // Defines the size of the QR code
						errorCorrectionLevel: 'L', // Error correction level
						scale: 10, // Size of each box in the QR code (similar to box_size)
						margin: 4 // Thickness of the border
					}).then(url => setQRcodeSrc(url));
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<form onSubmit={e => generateBanner(e)}>
				<button type="submit">Generate Banner</button>
				<textarea
					placeholder="prompt ..."
					value={prompt}
					onChange={e => setPrompt(e.target.value)}
				/>
				<Circles
					offSet={0}
					isLoading={isLoading}
				/>
				{output && (
					<>
						<img
							style={{ width: '400px' }}
							src={output[0]}
							alt="Generated Banner"
						/>
						<a
							target="_blank"
							href={output[0]}
						>
							click here for your image
						</a>
						<img src={qRcodeSrc} />
					</>
				)}
			</form>
		</div>
	);
}
