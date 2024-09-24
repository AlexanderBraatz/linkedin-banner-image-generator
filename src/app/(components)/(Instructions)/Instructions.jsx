'use client';
import styled from 'styled-components';
import React from 'react';

export default function Instructions(props) {
	return (
		<Container>
			<Heading>Bau dir dein Hintergrundbanner für Linkedin</Heading>
			<Steps>
				<Stick />
				<Step>
					<LeftSide>
						<Circle>
							<Number>1</Number>
						</Circle>
					</LeftSide>
					<RightSide>
						<Subheading>Deine Beschreibung eingeben</Subheading>
					</RightSide>
				</Step>
				<Step>
					<LeftSide></LeftSide>
					<RightSide>
						<ParagraphContainer id={'one'}>
							<Paragraph>
								Beschreibe im Textfeld, wie du dir dein persönliches
								Hintergrundbanner vorstellst. Wenn du dich zunächst inspirieren
								lassen möchtest, kannst du auch auf eines der Beispiele klicken,
								um einen Ausgangspunkt zu finden.
							</Paragraph>
						</ParagraphContainer>
					</RightSide>
				</Step>
				<Step>
					<LeftSide>
						<Circle>
							<Number>2</Number>
						</Circle>
					</LeftSide>
					<RightSide>
						<Subheading>﻿Bild generieren lassen</Subheading>
					</RightSide>
				</Step>
				<Step>
					<LeftSide></LeftSide>
					<RightSide>
						<ParagraphContainer id={'two'}>
							<Paragraph>
								Klicke auf den "Bild generieren"-Button und warte einen Moment,
								während die KI deine Worte in das gewünschte Bild umsetzt.
							</Paragraph>
						</ParagraphContainer>
					</RightSide>
				</Step>
				<Step>
					<LeftSide>
						<Circle>
							<Number>3</Number>
						</Circle>
					</LeftSide>
					<RightSide>
						<Subheading>﻿Abspeichern !</Subheading>
					</RightSide>
				</Step>
				<Step>
					<LeftSide></LeftSide>
					<RightSide>
						<ParagraphContainer id={'three'}>
							<Paragraph>
								Simsalabim! Betrachte dein Meisterwerk. Wenn es dir gefällt,
								scanne den QR-Code oder folge dem Link, um das selbst erstellte
								Banner herunterzuladen.
							</Paragraph>
						</ParagraphContainer>
					</RightSide>
				</Step>
			</Steps>
		</Container>
	);
}

const Container = styled.div`
	width: 71.1rem;
	margin: auto;
	height: 59.3rem;
	display: flex;
	justify-content: left;
	align-items: top;
	flex-direction: column;
`;

const Heading = styled.h2`
	font-size: 32px;
	font-weight: 600;

	color: var(--color-purple_dark);
	height: 4.2rem;
	margin-top: 6.1rem;
	letter-spacing: -0.5px;
`;

const Steps = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 4rem;
	position: relative;
`;
const Stick = styled.div`
	width: 0.3rem;
	height: 30rem;

	background-color: var(--color-purple_light);
	position: absolute;
	left: 1.9rem;
	top: 1rem;
	z-index: 0;
`;

const Step = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	z-index: 10;
`;

const LeftSide = styled.div`
	display: flex;
	align-items: center;
	min-width: 6.2rem;
`;

const Circle = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;

	background-color: var(--color-purple_light);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Number = styled.span`
	font-size: 18px;
	font-weight: 500;
	line-height: 26px;
	color: #333;
	/* background-color: var(--color-purple_dark); */
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: column;
`;

const Subheading = styled.h3`
	font-size: 18px;
	color: var(--color-purple_dark);
	font-weight: 400;
	margin: 0;
`;

const ParagraphContainer = styled.div`
	margin: 0;
	padding-top: 1.8rem;
	&#one {
		height: 11rem;
	}
	&#two {
		height: 11rem;
	}
	&#three {
		height: 11rem;
	}
`;

const Paragraph = styled.p`
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
	color: var(--color-purple_medium);

	margin: 0;
`;
