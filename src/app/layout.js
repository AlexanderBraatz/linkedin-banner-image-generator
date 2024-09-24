/* eslint-disable @next/next/no-head-element */
// import Link from 'next/link';
import './globals.css';
import '../assets/fonts/fonts.css';

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
