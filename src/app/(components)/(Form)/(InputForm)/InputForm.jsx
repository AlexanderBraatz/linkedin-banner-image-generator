'use client';
import styled from 'styled-components';
import React from 'react';

export default function InputForm({
	handleTextareaChange,
	prompt,
	handleSubmit
}) {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<Heading>Bitte gib deine Bildbeschreibung ein :</Heading>
			<Textarea
				onChange={handleTextareaChange}
				value={prompt}
				placeholder="Beschreiben Sie Ihr Bild detailliert…"
			></Textarea>
			<ButtonContainer>
				<Button
					type="submit"
					onClick={handleSubmit}
				>
					<Label>Bild generieren</Label>
				</Button>
			</ButtonContainer>
		</StyledForm>
	);
}

const StyledForm = styled.form`
	width: 71.1rem;
	margin: auto;
	/* height: 59.3rem; */
	display: flex;
	justify-content: left;
	align-items: top;
	flex-direction: column;
	padding-top: 1rem;
`;

const Heading = styled.h2`
	font-size: 32px;
	font-weight: 600;
	color: var(--color-purple_dark);
	height: 4.2rem;
	margin-top: 6.1rem;
	letter-spacing: -0.5px;
`;
const Textarea = styled.textarea`
	margin-top: 3rem;
	height: 28rem;

	background-color: var(--color-purple_light);

	border-radius: 10px;
	padding: 2rem;
	padding-top: 2.2rem;
	border: none;

	color: var(--color-purple_dark);
	resize: none;

	font-family: 'Inconsolata';
	font-size: 1.6rem;
	line-height: 2.2rem;
	&::placeholder {
		color: var(--color-purple_medium);
	}
	&:focus {
		outline: 2px solid var(--color-purple_dark); /* Add focus style, or you can set it to 'none' */
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
	padding-top: 1rem;
`;

const Button = styled.button`
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
