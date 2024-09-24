'use client';
import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';

export default function Examples({ data, handleExampleSelection }) {
	let example = data.description;

	let handleClick = e => {
		handleExampleSelection(example);
	};
	return (
		<Container>
			<ImageContainer>
				{/* <Image src={data.image} /> */}
				<Image
					src={data.imageSrc}
					alt="Banner speaker"
					width={1536}
					height={640}
					style={{
						maxWidth: '100%',
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</ImageContainer>
			<BodyContainer>
				<Heading>Beschreibung:</Heading>
				<Paragraph>{data.description}</Paragraph>
				<ButtonContainer>
					<Button
						type="button"
						// onClick={example => {
						// 	handleExampleSelection(example);
						// }}
						onClick={e => handleClick(e)}
					>
						<Label>Beispiel übernehmen</Label>
					</Button>
				</ButtonContainer>
			</BodyContainer>
		</Container>
	);
}

const Container = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-purple_light);
	border-radius: 1rem;
	width: 46.4rem;
	overflow: hidden;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 12.7rem;
	display: flex;
	justify-content: center;
`;

// const Image = styled.img`
// max-width: 100%;
// height: auto;
// width: 100%;
// height: 100%;
// object-fit: cover;
// `;

const BodyContainer = styled.div`
	width: 100%;
	text-align: left;
	padding: 2rem;
	border-top: 1px solid var(--color-purple_medium);
	border-left: 2px solid var(--color-purple_medium);
	border-right: 2px solid var(--color-purple_medium);
	border-bottom: 2px solid var(--color-purple_medium);
	border-radius: 0 0 1rem 1rem;
`;

const Heading = styled.h2`
	font-size: 1.5rem;
	color: var(--color-purple_dark);
	margin-bottom: 10px;
`;

const Paragraph = styled.p`
	font-size: 1.2rem;
	line-height: 1.6rem;
	color: var(--color-purple_dark);
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`;

const Button = styled.button`
	width: 100%;
	height: 4rem;
	background-color: var(--color-white);
	color: var(--color-purple_dark);
	padding: 6px 20px;
	border: 2px solid var(--color-purple_dark);
	border-radius: 100px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background-color: var(--color-purple_medium);
		color: var(--color-white);
	}

	&:active {
		background-color: var(--color-purple_light);
	}
`;

const Label = styled.span`
	font-weight: medium;
	font-size: 16px;
	line-height: 2.2rem;
`;
