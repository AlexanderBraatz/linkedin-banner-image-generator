/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// remotePatterns: ['replicate.delivery']
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**'
			}
		]
	}
};

export default nextConfig;
