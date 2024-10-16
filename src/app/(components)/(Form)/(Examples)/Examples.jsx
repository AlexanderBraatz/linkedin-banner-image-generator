'use client';
import styled from 'styled-components';
import Example from '../(Example)/Example.jsx';
import React, { useState, useEffect } from 'react';

let examplesData = [
	{
		imageSrc: '/images/Banner_speaker.png',
		description:
			'Banner Style: Professional event imagery, with bold typography announcing upcoming speaking engagements. Text: “Speaker | Upcoming at XYZ Conference 2024” Approach: This banner showcases professional credibility by highlighting participation in major events, perfect for building authority as a thought leader'
	},
	{
		imageSrc: '/images/Banner_Trainer2.png',
		description:
			'Banner Style: An energetic image with action shots of people exercising, vibrant colors, and a motivational phrase in the center right of the banner. Text: “Transforming Lives” Approach: The banner uses action photography and motivating text to convey energy and commitment, appealing to health-conscious professionals'
	},
	{
		imageSrc: '/images/Banner_Leadership.png',
		description:
			'Banner Style: A calm, scenic background with soft colors, featuring a motivational quote in elegant typography. Text: “Leadership is about making others better” Approach: This type of banner works for professionals looking to promote a positive, leadership-focused brand, combining calm visuals with inspirational messaging'
	},
	{
		imageSrc: '/images/Curly_speaker.png',
		description:
			'Banner Style: Professional event imagery. the picture is taken over the shoulder of the speaker looking out into the crowed of people who are paying close attention to the speaker on stage. its a female speaker with brown curly hair. the picture is taken from far away on a hd camera taken by a professional photographer.'
	}
];

export default function Examples({ handleExampleSelection, displayExamples }) {
	const [isDisplayNone, setIsDisplayNone] = useState(false);

	useEffect(() => {
		if (displayExamples) {
			setIsDisplayNone(!displayExamples);
		} else {
			setTimeout(() => setIsDisplayNone(!displayExamples), 200);
		}
	}, [displayExamples]);

	return (
		<BackGround
			className={`${displayExamples ? '' : 'hide'} ${
				isDisplayNone ? 'displayNone' : ''
			}`}
		>
			<GreyBackground>
				<Container>
					{examplesData.map((exampleData, i) => (
						<Example
							data={exampleData}
							handleExampleSelection={handleExampleSelection}
							key={i}
						/>
					))}
				</Container>
			</GreyBackground>
		</BackGround>
	);
}
const GreyBackground = styled.div`
	background-color: var(--color-grey2);
	padding: 20px;
	padding-top: 40px;
	padding-bottom: 40px;
	border-radius: 1rem;
	width: 1020px;
	margin: auto;
`;

const BackGround = styled.div`
	position: absolute;
	transform: translateY(-64px);
	z-index: 10;
	width: 107.8rem;
	background-color: var(--color-grey);
	padding-top: 64px;
	margin: 0 auto;
	margin-top: 20px;
	margin-bottom: 40px;

	opacity: 1;
	animation: 0.2s ease-out 0s 1 slideInFromTop;

	@keyframes slideInFromTop {
		0% {
			transform: translateY(-84px);
			opacity: 0;
		}
		100% {
			transform: translateY(-64px);
			opacity: 1;
		}
	}
	@keyframes slideOutToTop {
		0% {
			transform: translateY(-64px);
		}
		100% {
			transform: translateY(-74px);
		}
	}

	&.hide {
		animation: 0.2s ease-out 0s 1 slideOutToTop;
		opacity: 0;
		/* Make sure it's hidden after animation ends */
		transition: opacity 0.2s ease-out; /* visibility hidden after 0.2s */
	}
	&.displayNone {
		display: none;
	}
`;
const Container = styled.div`
	margin: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	column-gap: 1.2rem;
	row-gap: 2.4rem;
	width: 940px;
`;
