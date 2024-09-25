/* eslint-disable @next/next/no-head-element */
// import Link from 'next/link';
import './globals.css';
import '../assets/fonts/fonts.css';
import StyledComponentsRegistry from './(lib)/registry';

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
