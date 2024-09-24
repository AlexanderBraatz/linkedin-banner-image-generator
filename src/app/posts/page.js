import Link from 'next/link';
import CreatePost from './CreatePost';
export default async function PostsPage() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();
	return (
		<>
			<h1>PostsPage</h1>
			<CreatePost />
			<div>
				{posts?.map(post => {
					return (
						<Post
							key={post.id}
							post={post}
						/>
					);
				})}
			</div>
		</>
	);
}
function Post({ post }) {
	return (
		<Link href={`/post/${post.id}`}>
			<div>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</div>
		</Link>
	);
}
