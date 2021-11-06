// Import from libs
import React from 'react';

// Import styles
import './Logo.scss';

// Import images
import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';

// Main code
export const Logo: React.FC = () => {
	return (
		<a className="logo" href="/">
			<LogoSvg className="logo__image" />
		</a>
	);
};