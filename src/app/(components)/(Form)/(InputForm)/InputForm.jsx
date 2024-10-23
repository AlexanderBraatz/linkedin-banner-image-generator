'use client';
import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import Down from '../../../../../public/images/Down.svg';
import Up from '../../../../../public/images/Up2.svg';

export default function InputForm({
	handleTextareaChange,
	prompt,
	handleSubmit,
	changeModelToSchnell,
	changeModelToDev,
	toggleModel,
	model,
	handleClear,
	handleDisplayExamples,
	displayExamples
}) {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<Heading>Bitte gib deine Bildbeschreibung ein :</Heading>
			<TextareaWrapper>
				<Textarea
					onChange={handleTextareaChange}
					value={prompt}
					placeholder="Beschreiben Sie Ihr Bild detailliert…"
				></Textarea>
			</TextareaWrapper>
			<ButtonContainer>
				<ModelSelectionButtonContainer>
					<Button
						type="action"
						onClick={handleClear}
						className={'delete'}
					>
						<Label>Delete</Label>
					</Button>
					<ButtonDropDown
						type="action"
						onClick={handleDisplayExamples}
						className={displayExamples ? 'selected' : ''}
					>
						<LabelExample>Beispiele</LabelExample>
						{displayExamples ? (
							<Image
								src={Up}
								alt="Down"
							/>
						) : (
							<Image
								src={Down}
								alt="Down"
							/>
						)}
					</ButtonDropDown>
					{/* <Button
						// className={model.current === 'schnell' ? 'selected' : ''}
						className={model === 'schnell' ? 'selected' : ''}
						type="action"
						onClick={changeModelToSchnell}
					>
						<Label>Schnell</Label>
					</Button>
					<Button
						// className={model.current === 'dev' ? 'selected' : ''}
						className={model === 'dev' ? 'selected' : ''}
						type="action"
						onClick={changeModelToDev}
					>
						<Label>Dev</Label>
					</Button> */}
				</ModelSelectionButtonContainer>
				<RightButtonGroup>
					<ExtraButton
						className={model === 'dev' ? 'selected' : ''}
						type="action"
						onClick={toggleModel}
					>
						<Label>
							{/* <Plus>{model === 'dev' ? '' : '+ '}</Plus>Mit mehr Details */}
							<Plus></Plus>Mit mehr Details
						</Label>
					</ExtraButton>
					<Button
						type="submit"
						onClick={handleSubmit}
						className={'generate'}
					>
						<Label>Bild generieren</Label>
					</Button>
				</RightButtonGroup>
			</ButtonContainer>
		</StyledForm>
	);
}

const StyledForm = styled.form`
	width: 71.1rem;
	margin: auto;
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
const TextareaWrapper = styled.div`
	z-index: 11;
	margin-top: 3rem;
	height: 28rem;
`;
const Textarea = styled.textarea`
	height: 28rem;
	width: 100%;
	background-color: var(--color-purple_light);

	border-radius: 10px;
	padding-left: 2.4rem;
	padding-right: 2.4rem;
	padding-top: 2rem;
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
	justify-content: space-between;
	align-items: center;
	padding-top: 1rem;
`;
const ModelSelectionButtonContainer = styled.div`
	display: flex;
	justify-content: left;
	gap: 0.6rem;
	align-items: center;
`;
const RightButtonGroup = styled.div`
	/* position: relative; */
	display: flex;
	justify-content: left;
	gap: 0.8rem;
	align-items: center;
`;
const Plus = styled.span`
	font-weight: medium;
	font-size: 18px;
	line-height: 1.8rem;
	&::before {
		content: '+ ';
	}
`;
const ExtraButton = styled.button`
	z-index: 20;
	position: relative;
	left: 38px;
	background-color: var(--color-white);
	color: var(--color-purple_dark);
	padding: 6px 40px 6px 14px; // top right bottom left

	border: 2px solid var(--color-purple_dark);
	border-radius: 100px 0px 0px 100px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 600;
	left: 96px; // + Detail
	left: 137px; // + Mit mehr Detils
	padding: 6px 0px 6px 14px; // top right bottom left

	transition: 50ms ease-in;
	&.selected {
		background-color: var(--color-purple_light);
		color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_dark);
		transform: scaleX(1.04);
		left: 38px;
		padding: 6px 40px 6px 20px; // top right bottom left
	}

	&:hover {
		background-color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_medium);
		color: var(--color-white);
		transform: scaleX(1.04);
		left: 38px;
		padding: 6px 40px 6px 10px; // top right bottom left
		> span > span::before {
			white-space: pre;
			content: '   ';
		}
	}
	&.delete:hover {
		background-color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_dark);
		color: var(--color-purple_dark);
		background-color: var(--color-purple_light_red);
		transform: scale(1.04);
	}

	&.generate {
		background-color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_medium);
		color: var(--color-white);
	}
	&.generate:hover {
		background-color: var(--color-purple_medium);
		border: 2px solid var(--color-purple_dark);
		color: var(--color-white);
		transform: scale(1.04);
	}
	&:active {
		background-color: var(--color-purple_medium);
		transform: scaleX(1.06);
	}
`;
const Button = styled.button`
	z-index: 20;
	background-color: var(--color-white);
	color: var(--color-purple_dark);
	padding: 6px 20px;
	border: 2px solid var(--color-purple_dark);
	border-radius: 100px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 600;

	transition: 50ms ease-in;
	&.selected {
		background-color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_medium);
		color: var(--color-white);
	}
	&:active {
		background-color: var(--color-purple_light);
	}

	&:hover {
		background-color: var(--color-purple_medium);
		border: 2px solid var(--color-purple_dark);
		color: var(--color-white);
		transform: scale(1.04);
	}
	&.delete:hover {
		background-color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_dark);
		color: var(--color-purple_dark);
		background-color: var(--color-purple_light_red);
		transform: scale(1.04);
	}

	&.generate {
		background-color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_medium);
		color: var(--color-white);
	}
	&.generate:hover {
		background-color: var(--color-purple_medium);
		border: 2px solid var(--color-purple_dark);
		color: var(--color-white);
		transform: scaleX(1.04);
	}
`;

const Label = styled.span`
	font-weight: medium;
	font-size: 16px;
	line-height: 1.8rem;
`;

const ButtonDropDown = styled.button`
	z-index: 20;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 37px;
	background-color: var(--color-white);
	color: var(--color-purple_dark);
	padding: 6px 20px;
	border: 2px solid var(--color-purple_dark);
	border-radius: 100px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 600;

	transition: 50ms ease-in;
	&.selected {
		background-color: var(--color-purple_dark);
		border: 2px solid var(--color-purple_medium);
		color: var(--color-white);
	}
	&:active {
		background-color: var(--color-purple_light);
	}

	&:hover {
		background-color: var(--color-purple_medium);
		border: 2px solid var(--color-purple_dark);
		color: var(--color-white);
		transform: scale(1.04);
	}

	& img {
		position: relative;
		left: 6px;
	}
`;

const LabelExample = styled.span`
	font-weight: medium;
	font-size: 16px;
	line-height: 1.8rem;
`;
