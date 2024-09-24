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
`;
