'use client';

import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';

import InputForm from './(InputForm)/InputForm.jsx';
import Circles from './(Circles)/Circles.jsx';
import GeneratedBanner from './(GeneratedBanner)/GeneratedBanner.jsx';
import LinkBox from './(LinkBox)/LinkBox.jsx';
import Examples from './(Examples)/Examples.jsx';

export default function Form(props) {
	console.log('form has reloded');
	const [output, setOutput] = useState(['/images/Grey2BannerBackground.png']);
	const [prompt, setPrompt] = useState('');
	const [qRcodeSrc, setQRcodeSrc] = useState('/images/blankQRcode.png');
	const [isLoading, setIsLoading] = useState(false);

	// logic for selecting different black forest labs models
	// const model = useRef('schnell');
	const [model, setModel] = useState('schnell');

	function changeModelToSchnell(e) {
		e.preventDefault();
		console.log('changeModelToSchnell has run');
		// model.current = 'schnell';
		setModel('schnell');
	}
	function changeModelToDev(e) {
		e.preventDefault();
		console.log('changeModelToDev has run');
		// model.current = 'dev';
		setModel('dev');
	}

	function handleExampleSelection(example) {
		setPrompt(example);
		console.log('handleExampleSelection in Form', prompt);
	}

	const generateBanner = async e => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const response = await fetch(`/api/generate-banner/${model}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ prompt })
			});

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
		<>
			<InputForm
				prompt={prompt}
				handleTextareaChange={e => setPrompt(e.target.value)}
				handleSubmit={e => generateBanner(e)}
				changeModelToSchnell={e => changeModelToSchnell(e)}
				changeModelToDev={e => changeModelToDev(e)}
				model={model}
			/>
			<Circles
				offSet={0}
				isLoading={isLoading}
			/>
			<GeneratedBanner
				isLoading={isLoading}
				bannerImageURL={output[0]}
			/>
			<Circles
				offSet={3}
				isLoading={isLoading}
			/>
			<LinkBox
				bannerImageURL={output[0]}
				qRcodeSrc={qRcodeSrc}
				isLoading={isLoading}
			/>
			<Examples
				isLoading={isLoading}
				handleExampleSelection={handleExampleSelection}
			/>
		</>
	);
}
