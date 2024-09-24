import Replicate from 'replicate';

// const replicate = new Replicate({
// 	auth: process.env.local.REPLICATE_API_TOKEN
// });

export default function CreateNote() {
	// const create = async formData => {
	// 	await fetch('https://jsonplaceholder.typicode.com/posts', {

	// });

	return (
		<form>
			<h3>Create a new Note</h3>

			<input
				type="text"
				placeholder="Title"
				// value={title}
				// onChange={e => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Body"
				// value={body}
				// onChange={e => setBody(e.target.value)}
			/>
			<button type="submit">Create Post</button>
		</form>
	);
}
