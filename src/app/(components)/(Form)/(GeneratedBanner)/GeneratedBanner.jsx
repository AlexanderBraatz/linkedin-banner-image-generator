'use client';
import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';
import greyBanner from '../../../../../public/images/Grey2BannerBackground.png';

import { useState, useEffect } from 'react';

export default function GeneratedBanner({ isLoading, bannerImageURL }) {
	return (
		<Container>
			<ImageContainer>
				{isLoading ? (
					<PlaceholderTransparent></PlaceholderTransparent>
				) : (
					<Image
						src={bannerImageURL}
						alt="Banner speaker"
						width={1536}
						height={640}
						style={{
							borderRadius: '1rem',
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							position: 'absolute',
							zIndex: '1'
						}}
					/>
				)}
				<PlaceholderPurple></PlaceholderPurple>
				{/* <Image
					src={bannerImageURL}
					alt="Banner speaker"
					width={1536}
					height={640}
					style={{
						borderRadius: '1rem',
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/> */}
			</ImageContainer>
			<AvatarContainer>
				<Image
					src={'/images/AvatarSquare.jpeg'}
					alt="AvatarSquare"
					width={188}
					height={188}
					style={{
						borderRadius: '50%',
						border: '0.6rem solid #FFFFFF'
					}}
				/>
			</AvatarContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 94.8rem;
	height: 23.7rem;
	margin: auto;
	margin-top: 3rem;
	position: relative;
	margin-bottom: 5rem;
	background-color: var(--color-grey2);
	border-radius: 1rem;

	@media (max-width: 960px) {
		width: 78rem;
		height: 19.5rem;
	}
	@media (max-width: 790px) {
		width: 39rem;
		height: 9.75rem;
	}

	@media (max-width: 420px) {
		width: 30rem;
		height: 7.5rem;
	}
	@media (max-width: 330px) {
		width: 28rem;
		height: 7rem;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	width: 94.8rem;
	height: 23.7rem;
	background-color: var(--color-grey2);

	border-radius: 1rem;
	overflow: hidden;
`;
const PlaceholderPurple = styled.div`
	position: absolute;
	z-index: 0;
	background-color: var(--color-purple_light);
	border-radius: 1rem;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0.5;
	animation: pulse 1600ms infinite;
	@keyframes pulse {
		0% {
			opacity: 0.5;
		}

		50% {
			opacity: 0;
		}
	}
`;
const PlaceholderTransparent = styled.div`
	z-index: 1;
	position: absolute;
	background-color: transparent;
	border-radius: 1rem;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const AvatarContainer = styled.div`
	z-index: 2;
	position: absolute;
	width: 18.8rem;
	height: 18.8rem;
	top: 10.5rem;
	left: 3.1rem;

	@media (max-width: 960px) {
		transform: scale(0.82);
		top: calc(10.5rem * 0.82 * 0.82);
		left: calc(3.1rem * 0.82 * 0.82);
	}
	@media (max-width: 790px) {
		transform: scale(0.41);
		top: -1rem;
		left: -3.8rem;
	}

	@media (max-width: 420px) {
		transform: scale(0.31);
		top: -3rem;
		left: -5rem;
	}
	@media (max-width: 330px) {
		transform: scale(0.29);
		top: -3.4rem;
		left: -5.3rem;
		/* width: 5.56rem;
		height: 5.56rem; */
		/* height: calc(18.8rem / 3.38); */
		/* top: 10.5rem;
		left: 3.1rem; */
	}
	/* & img { */
	/* @media (max-width: 420px) {
			width: 18.8rem;
			height: 18.8rem;
			top: 10.5rem;
			left: 3.1rem;
		} */
	/* @media (max-width: 330px) { */
	/* width: 5.56rem;
			height: 5.56rem; */
	/* height: calc(18.8rem / 3.38); */
	/* top: 10.5rem;
			left: 3.1rem; */
	/* } */
	/* } */
`;
// const Avatar = styled.img`
// 	width: 18.8rem;
// 	height: 18.8rem;
// 	border-radius: 50%;
// 	border: 0.6rem solid ${props => props.theme.desktop.white};
// `;
