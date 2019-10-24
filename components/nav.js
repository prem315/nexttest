// components/NavBar.js
import Link from 'next/link';

const navBarStyle = {
	backgroundColor: 'red',
	color: 'white',
	width: '100%',
	height: '60px'
};

const Nav = () => (
	<div className="NavBar" style={navBarStyle}>
		<ul>
			<li>
				<Link href="/nearme">Near BY</Link>
			</li>
			<li>
				<Link href="/explore">Explore</Link>
			</li>
		</ul>
	</div>
);

export default Nav;
