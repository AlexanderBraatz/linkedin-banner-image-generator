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
					alt="Banner speaker"
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
	width: 18.8rem;
	height: 18.8rem;
	position: absolute;
	top: 10.5rem;
	left: 3.1rem;
`;
// const Avatar = styled.img`
// 	width: 18.8rem;
// 	height: 18.8rem;
// 	border-radius: 50%;
// 	border: 0.6rem solid ${props => props.theme.desktop.white};
// `;
