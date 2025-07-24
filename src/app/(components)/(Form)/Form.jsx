'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

import InputForm from './(InputForm)/InputForm.jsx';
import Circles from './(Circles)/Circles.jsx';
import GeneratedBanner from './(GeneratedBanner)/GeneratedBanner.jsx';
import LinkBox from './(LinkBox)/LinkBox.jsx';
import Examples from './(Examples)/Examples.jsx';

export default function Form(props) {
	const [outputExternalLinkToGenImg, setOutputExternalLinkToGenImg] = useState(
		'/images/Grey2BannerBackground.png'
	);
	const [prompt, setPrompt] = useState('');
	const [qRcodeSrc, setQRcodeSrc] = useState('/images/blankQRcode.png');
	const [isLoading, setIsLoading] = useState(false);
	const [hasGenerated, setHasGenerated] = useState(false);
	const [downloadURL, setDownloadURL] = useState('/download');
	const [displayExamples, setDisplayExamples] = useState(true);

	// logic for selecting different black forest labs models
	// const model = useRef('schnell');
	const [model, setModel] = useState('schnell');

	function changeModelToSchnell(e) {
		e.preventDefault();
		// model.current = 'schnell';
		setModel('schnell');
	}
	function changeModelToDev(e) {
		e.preventDefault();
		// model.current = 'dev';
		setModel('dev');
	}
	function toggleModel(e) {
		e.preventDefault();
		if (model === 'schnell') {
			setModel('dev');
		} else {
			setModel('schnell');
		}
	}
	useEffect(() => {
		if (model === 'dev') {
			generateBannerWithModel(model);
			setModel('schnell');
		}
	}, [model]);

	function handleExampleSelection(example) {
		setPrompt(example);
		setDisplayExamples(false);
	}

	function handleClear(e) {
		e.preventDefault();
		setPrompt('');
	}
	function handleDisplayExamples(e) {
		e.preventDefault();
		setDisplayExamples(prevValue => !prevValue);
	}

	function extractLinkId(url) {
		// Assuming the URL is always in this format
		// a breaking change here was yhqm chaged to xezq
		// this whole id extraction process is unessasary in hindsight!
		// example : https://replicate.delivery/xezq/TBkjT7uva87SERfBj5pGlE1llHTRuhWMmQcb6CU9tLuEM9hKA/out-0.png
		const parts = url.split('/');
		const xezqIndex = parts.indexOf('xezq');
		if (xezqIndex !== -1 && parts.length > xezqIndex + 1) {
			return parts[xezqIndex + 1]; // This is the linkId
		}
		return null;
	}
	const generateBanner = async e => {
		e.preventDefault();
		generateBannerWithModel(model);
	};
	const generateBannerWithModel = async currentModel => {
		try {
			setIsLoading(true);
			setDisplayExamples(false);
			const response = await fetch(`/api/generate-banner/${currentModel}`, {
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
					//set external image link
					setOutputExternalLinkToGenImg(data.output[0]);

					//make relative link to [my-site]/download page that matches the generated image
					const bannerImageURL = data.output[0];
					const linkId = extractLinkId(bannerImageURL);
					const downloadURL = `/download/${linkId}`;

					//make explicit link to [my-site]/download page that matches the generated image
					const baseUrl = window.location.origin; // gets base url
					console.log(baseUrl);
					let downloadURLExplicit;
					if (baseUrl === 'http://localhost:3000') {
						downloadURLExplicit = `${baseUrl}/download/${linkId}`; //points to local host in dev and base url in production
					} else {
						downloadURLExplicit = `https://linkedin-banner-image-generator.vercel.app/download/${linkId}`; //points to local host in dev and base url in production
					}

					setDownloadURL(downloadURL);
					//use QRCode to make a url to use as src for QR code
					QRCode.toDataURL(downloadURLExplicit, {
						version: 6, // Defines the size of the QR code
						errorCorrectionLevel: 'L', // Error correction level
						scale: 10, // Size of each box in the QR code (similar to box_size)
						margin: 4 // Thickness of the border
					}).then(url => setQRcodeSrc(url));

					setHasGenerated(true);
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
			setModel('schnell');
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
				handleClear={handleClear}
				handleDisplayExamples={e => handleDisplayExamples(e)}
				displayExamples={displayExamples}
				toggleModel={toggleModel}
			/>
			<Examples
				isLoading={isLoading}
				handleExampleSelection={handleExampleSelection}
				displayExamples={displayExamples}
			/>
			<Circles
				offSet={0}
				isLoading={isLoading}
				displayExamples={displayExamples}
			/>
			<GeneratedBanner
				isLoading={isLoading}
				bannerImageURL={outputExternalLinkToGenImg}
			/>
			<Circles
				offSet={3}
				isLoading={isLoading}
			/>
			<LinkBox
				urlIsProvided={hasGenerated}
				bannerImageURL={downloadURL}
				qRcodeSrc={qRcodeSrc}
				isLoading={isLoading}
			/>
		</>
	);
}
