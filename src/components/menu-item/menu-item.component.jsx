import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
	<div style={{ backgroundImage: `url(${imageUrl})` }}>
		<div className={`${size} menu-item`}>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP</span>
			</div>
		</div>
	</div>
);

export default MenuItem;
