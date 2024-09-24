import Link from 'next/link';
export default async function UsersPage() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await response.json();
	return (
		<>
			<h1>UsersPage</h1>
			<div>
				{users?.map(user => {
					return (
						<User
							key={user.id}
							user={user}
						/>
					);
				})}
			</div>
		</>
	);
}
function User({ user }) {
	return (
		<Link href={`/user/${user.id}`}>
			<div>
				<h2>{user.name}</h2>
				<h5>{user.email}</h5>
				<p>{user.phone}</p>
			</div>
		</Link>
	);
}
