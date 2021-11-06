// import from libs
import React from 'react';

// Import types
import { ChildItemPropsType } from './ChildItemType';

// Import utils
import { ageToStr } from '../../../utils/pureFunctions';

// Main code
export const ChildItem: React.FC<ChildItemPropsType> = ({name, age}) => {
	return (
		<li className="preview__children-item">
			<span>{ name }, { ageToStr(+age) }</span>
		</li>
	);
};