// Import from libs
import React from 'react';

// Import styles
import './Header.scss';

// Import components
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';

// Main code
export const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header__inner">
				<Logo />
				<Menu />
			</div>
		</header>
	);
};