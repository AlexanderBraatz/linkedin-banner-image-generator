'use client';
import styled from 'styled-components';
import React from 'react';

export default function Header(props) {
	return (
		<Container>
			<Heading>LinkedIn Hintergrundbanner Generator</Heading>
		</Container>
	);
}

const Container = styled.div`
	height: 21.6rem;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 960px) {
		height: 11.6rem;
	}
	@media (max-width: 790px) {
		height: fit-content;
	}

	@media (max-width: 420px) {
		/* font-size: 16px;
		letter-spacing: -1px;
		padding-left: 2rem;
		padding-right: 2rem; */
	}
`;

const Heading = styled.div`
	padding-top: 1rem;
	font-size: 72px;
	font-weight: 600;
	color: var(--color-purple_dark);
	letter-spacing: -4px;
	-webkit-transform: scale(1.05, 1); /* Safari and Chrome */
	-moz-transform: scale(1.05, 1); /* Firefox */
	-ms-transform: scale(1.05, 1); /* IE 9 */
	-o-transform: scale(1.05, 1); /* Opera */
	transform: scale(1.05, 1); /* W3C */

	@media (max-width: 1320px) {
		font-size: 52px;
	}
	@media (max-width: 960px) {
		font-size: 42px;
		letter-spacing: -2px;
	}
	@media (max-width: 790px) {
		text-align: center;
		transform: scale(1, 1); /* W3C */
		padding-left: 4rem;
		padding-right: 4rem;
		padding-top: 4rem;
		padding-bottom: 3rem;
	}
	@media (max-width: 600px) {
		font-size: 28px;
		letter-spacing: 0px;
	}
	@media (max-width: 600px) {
		font-size: 28px;
		letter-spacing: 0px;
	}
	@media (max-width: 550px) {
		font-size: 20px;
		letter-spacing: -1px;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
	@media (max-width: 420px) {
		font-size: 16px;
		letter-spacing: -1px;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 0.4rem;
		padding-bottom: 0.4rem;
	}
`;
