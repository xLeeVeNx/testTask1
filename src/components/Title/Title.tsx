// Import from libs
import React from 'react';

// Import types
import { TitlePropsType } from './TitleType';

// Main code
export const Title: React.FC<TitlePropsType> = ({title}) => {
	return (
		<h3 className="title">{ title }</h3>
	);
};