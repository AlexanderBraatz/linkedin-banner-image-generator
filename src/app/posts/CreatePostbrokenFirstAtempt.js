'use client';
// dont think this works as a client component as trying to use the response causes a rerender, although that could be a bug
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function createNote() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [res, setRes] = useState('nothing yet');
	const router = useRouter();

	const create = async () => {
		await fetch('https://jsonplaceholder.typicode.com/posts', {
			//cache: 'no-store', //trying to prevent refresh from hiding my consolelog
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			},
			body: JSON.stringify({
				title,
				body,
				userId: 1
			})
		})
			.then(response => response.json())
			.then(json => {
				setRes(json);
				console.log(json);
			});

		//console log the dummy response for api post proof of concept

		setTitle('');
		setBody('');
		console.log('create function  has run');

		router.refresh();
	};

	return (
		<form onSubmit={create}>
			<h3>Create a new Note</h3>
			<h3>{res}</h3>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Body"
				value={body}
				onChange={e => setBody(e.target.value)}
			/>
			<button type="submit">Create Post</button>
		</form>
	);
}
