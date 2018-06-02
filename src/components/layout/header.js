import React from 'react';
import { Route, Link } from 'react-router-dom';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">AVILON</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link to='/ui/dashboard' className="nav-link">Home</Link>
							</li>
							<li className="nav-item">
								<Link to='/ui/catalog' className="nav-link">Catalog</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

