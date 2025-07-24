import { NextResponse } from 'next/server';

export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const linkId = searchParams.get('linkId');

		if (!linkId) {
			return NextResponse.json(
				{ error: 'Missing linkId parameter' },
				{ status: 400 }
			);
		}

		const downloadURL = `https://replicate.delivery/xezq/${linkId}/out-0.png`;
		// http://localhost:3002/_next/image?url=%2Fimages%2FBanner_speaker.png&w=3840&q=75
		// Fetch the image from the remote server
		const response = await fetch(downloadURL);
		console.log(response.headers.get('content-type'));
		if (!response.ok) {
			return NextResponse.json(
				{ error: 'Error fetching the file' },
				{ status: response.status }
			);
		}

		const contentType =
			response.headers.get('content-type') || 'application/octet-stream';
		const contentDisposition =
			'attachment; filename="quadriga_Linkedin_banner.png"';
		const buffer = await response.arrayBuffer();

		return new NextResponse(Buffer.from(buffer), {
			status: 200,
			headers: {
				'Content-Type': contentType,
				'Content-Disposition': contentDisposition
			}
		});
	} catch (error) {
		console.error('API Route Error:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
