'use client';
import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';

export default function LinkBox({ isLoading, qRcodeSrc, bannerImageURL }) {
	return (
		<Container>
			{isLoading ? (
				<Empty></Empty>
			) : (
				<>
					{/* <StyledQRCode src={QRCode} /> */}
					<Image
						src={qRcodeSrc}
						alt="QRCode"
						width={183}
						height={185}
						style={{
							borderRadius: '1rem',
							marginTop: '1.5rem'
						}}
					/>

					<LinkContainer
						target="_blank"
						href={bannerImageURL}
					>
						<Link>Klick hier für dein Bild</Link>
					</LinkContainer>
				</>
			)}
		</Container>
	);
}

const Empty = styled.div``;

const Container = styled.div`
	width: 22.3rem;
	height: 26.3rem;
	margin: auto;
	margin-top: 3rem;
	position: relative;
	margin-bottom: 5rem;
	background-color: var(--color-purple_light);
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
	padding-bottom: 1.5rem;
`;

const LinkContainer = styled.a`
	background-color: var(--color-white);
	color: var(--color-purple_dark);
	padding: 6px 20px;
	border: 2px solid var(--color-purple_dark);
	border-radius: 10px;
	margin-top: 1rem;
	margin-left: 2rem;
	margin-right: 2rem;
	cursor: pointer;
	font-size: 14px;

	&:hover {
		background-color: var(--color-purple_medium);
		color: var(--color-white);
	}

	&:active {
		background-color: var(--color-purple_light);
	}
`;
const Link = styled.span`
	font-weight: medium;
	font-size: 14px;
	line-height: 2.2rem;
`;
