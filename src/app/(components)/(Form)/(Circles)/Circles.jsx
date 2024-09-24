'use client';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

export default function Circles({ isLoading, offSet }) {
	const [number, setNumber] = useState(8 - offSet);

	useEffect(() => {
		let intervalId;
		if (isLoading) {
			intervalId = setInterval(() => {
				setNumber(prevNumber => (prevNumber < 8 ? prevNumber + 1 : 1));
			}, 200);
		} else {
			setNumber(7);
		}
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [isLoading]);

	return (
		<Container>
			<Circle
				id={'one'}
				className={number == 1 ? 'on' : number == 2 ? 'fading' : 'off'}
			/>
			<Circle
				id={'two'}
				className={number == 2 ? 'on' : number == 3 ? 'fading' : 'off'}
			/>
			<Circle
				id={'three'}
				className={number == 3 ? 'on' : number == 4 ? 'fading' : 'off'}
			/>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	position: relative;
	top: -1rem;
`;

const Circle = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;

	background-color: var(--color-purple_light);
	transition: 0.4s ease-out background-color, 0.4s ease-out transform;

	&.on {
		transform: scale(1.2);

		background-color: var(--color-purple_dark);
	}
	&.fading {
		transform: scale(1.1);

		background-color: var(--color-purple_medium);
	}
`;
