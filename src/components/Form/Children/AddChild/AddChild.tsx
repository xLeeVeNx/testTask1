// Import from libs
import React from 'react';
import { v1 } from 'uuid';

// Import types
import { AddChildPropsType } from './AddChildType';

// Main code
export const AddChild: React.FC<AddChildPropsType> = ({push, children}) => {
	const onClickButtonHandler = () => push({id: v1(), name: '', age: ''});

	return (
		<button className="form__children-buttonAdd" type="button"
		        onClick={ onClickButtonHandler } disabled={ children.length === 5 }>
			<span className="form__children-text">Добавить ребенка</span>
		</button>
	);
};