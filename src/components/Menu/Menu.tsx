// Import from libs
import React from 'react';
import { v1 } from 'uuid';

// Import styles
import './Menu.scss';

// Import components
import { MenuItem } from './MenuItem/MenuItem';

// Import types
import { MenuItemType } from './MenuItem/MenuItemType';

// Main code
const menuItems: MenuItemType[] = [
	{
		id: v1(),
		text: 'Форма',
		href: '/'
	},
	{
		id: v1(),
		text: 'Превью',
		href: '/preview'
	}
];

export const Menu: React.FC = () => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				{
					menuItems.map(item =>
						<MenuItem key={item.id} text={ item.text } href={ item.href } />
					)
				}
			</ul>
		</nav>
	);
};