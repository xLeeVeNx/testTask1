// Import from libs
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import types
import { MenuItemPropsType } from './MenuItemType';

// Main code
export const MenuItem: React.FC<MenuItemPropsType> = ({text, href}) => {
	return (
		<li className="menu__item">
			<NavLink className="menu__link" to={ href }>{ text }</NavLink>
		</li>
	);
};