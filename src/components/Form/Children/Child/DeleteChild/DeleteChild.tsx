// Import from libs
import React from 'react';

// Import types
import { DeleteChildPropsType } from './DeleteChildType';

// Main code
export const DeleteChild: React.FC<DeleteChildPropsType> =
	({
		 remove, index
	 }) => {
		const onClickButtonHandler = () => remove(index);
		return (
			<button className="form__children-delete" type="button" onClick={ onClickButtonHandler }>Удалить</button>
		);
	};