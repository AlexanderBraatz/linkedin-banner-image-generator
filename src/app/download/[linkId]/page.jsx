'use client';
import Image from 'next/image';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

export default function DownloadPage({ params }) {
	const { linkId } = params;
	const [showComponent, setShowComponent] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowComponent(true);
		}, 500); // Delay in milliseconds (e.g., 3000ms = 3 seconds)

		// Clean up the timer when the component unmounts
		return () => clearTimeout(timer);
	}, []);
	// const downloadURLTestExample =('https://replicate.delivery/yhqm/U9UOeFYGWF1MfkrVqqeKiqqjoHNUPwxqdG85ysi0qLwqjXNnA/out-0.png');
	const downloadURL = `https://replicate.delivery/yhqm/${linkId}/out-0.png`;

	const handleDownload = async e => {
		e.preventDefault();
		try {
			const response = await fetch(
				`/api/download-banner?linkId=${encodeURIComponent(linkId)}`,
				{
					method: 'GET'
				}
			);

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const blob = await response.blob();

			const url = window.URL.createObjectURL(blob);

			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', `Quadriga_Linkedin_banner.png`);
			document.body.appendChild(link);
			link.click();
			link.parentNode.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error('Download error:', error);
		}
	};
	return (
		<>
			<HeadingContainer>
				<Heading>LinkedIn Hintergrundbanner Generator</Heading>
			</HeadingContainer>
			{showComponent ? (
				<PageContainer>
					<Card>
						{/* <ImageContainer> */}
						<ImageContainer>
							<Image
								src={downloadURL}
								alt="Banner speaker"
								width={1536}
								height={640}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover'
								}}
							/>
						</ImageContainer>
						{/* </ImageContainer> */}
						<BodyContainer>
							{/* <SubHeadingContainer> */}
							<SubHeading>Hier ist ihr Bild !</SubHeading>
							{/* </SubHeadingContainer> */}
							<Paragraph>
								Vielen Dank, dass Sie unseren Generator genutzt haben. Ihr
								individuelles Bild ist nun bereit zum Download. Klicken Sie
								einfach auf den Button, um es auf Ihrem Gerät zu speichern.
							</Paragraph>
							<ButtonContainer>
								<ButtonDownloadLink onClick={e => handleDownload(e)}>
									<Label>Bild Herunterladen</Label>
								</ButtonDownloadLink>
							</ButtonContainer>
						</BodyContainer>
					</Card>
				</PageContainer>
			) : (
				<></>
			)}
		</>
	);
}

const HeadingContainer = styled.div`
	height: 4.8rem;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: var(--color-grey2);
	padding: 0.8rem;
`;

const Heading = styled.div`
	font-size: 16px;
	font-weight: 600;
	color: var(--color-purple_dark);
`;

const PageContainer = styled.div`
	width: 100%;
	max-width: 360px;
	padding: 0.8rem;
	margin: auto;
`;

const Card = styled.div`
	/* margin-left: 0.8rem;
	margin-right: 0.8rem; */
	margin: auto;
	width: 100%;
	background-color: var(--color-purple_light);
	border-radius: 1rem;
	overflow: hidden;
	animation: 0.5s ease-out 0s 1 slideInFromBottom;

	@keyframes slideInFromBottom {
		0% {
			transform: translateY(10%);
		}
		100% {
			transform: translateY(0);
		}
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	aspect-ratio: 4 / 1;
	background-color: var(--color-grey2);
	overflow: hidden;
`;
const BodyContainer = styled.div`
	width: 100%;
	text-align: left;
	padding: 2rem;
	padding-top: 2.4rem;
	border-top: 1px solid var(--color-purple_medium);
	border-left: 2px solid var(--color-purple_medium);
	border-right: 2px solid var(--color-purple_medium);
	border-bottom: 2px solid var(--color-purple_medium);
	border-radius: 0 0 1rem 1rem;
`;

const SubHeading = styled.div`
	font-size: 2rem;
	font-weight: 600;
	color: var(--color-purple_dark);
	margin-bottom: 8px;
`;
const Paragraph = styled.p`
	font-size: 1.2rem;
	line-height: 1.6rem;
	color: var(--color-purple_dark);
	margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: right;
`;
const ButtonDownloadLink = styled.button`
	background-color: var(--color-white);
	color: var(--color-purple_dark);
	padding: 0px 16px;
	height: 3.8rem;
	border: 2px solid var(--color-purple_dark);
	border-radius: 10px;
	cursor: pointer;
	&.selected {
		background-color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_medium);
		color: var(--color-white);
	}

	&:hover {
		background-color: var(--color-purple_medium);
		color: var(--color-white);
	}

	&:active {
		background-color: var(--color-purple_light);
	}
`;

const Label = styled.span`
	font-weight: 600;
	font-size: 14px;
	line-height: 1.4rem;
`;
