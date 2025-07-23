'use client';
import React from 'react';
import styled from 'styled-components';

export default function MobileDisclaimer() {
	return (
		<DisclaimerContainer>
			<Title>Please view this website on a larger screen</Title>
			<Text>
				This project was built for a specific use case on large monitors at a
				tech convention.
			</Text>
			<Text>
				Please open this project on a larger screen to view all its features as
				intended.
			</Text>
		</DisclaimerContainer>
	);
}

const DisclaimerContainer = styled.div`
	display: none;
	max-width: 360px;
	width: 90%;
	margin: 2rem auto;
	padding: 1.6rem;
	background-color: var(--color-grey2);
	border: 1px solid var(--color-purple_dark);
	border-radius: 0.5rem;
	animation: fadeIn 0.5s ease-out;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10%);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@media (max-width: 960px) {
		display: block;
	}
`;

const Title = styled.h1`
	font-size: 1.8rem;
	font-weight: 600;
	color: var(--color-purple_dark);
	margin-bottom: 1rem;
	text-align: center;
`;

const Text = styled.p`
	font-size: 1.2rem;
	line-height: 1.6rem;
	color: var(--color-purple_dark);
	margin-bottom: 0.8rem;

	&:last-child {
		margin-bottom: 0;
	}
`;
