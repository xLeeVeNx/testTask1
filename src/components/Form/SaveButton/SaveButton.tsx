// Import from libs
import React from 'react';

// Import types
import { SaveButtonPropsType } from './SaveButtonType';

// Main code
export const SaveButton: React.FC<SaveButtonPropsType> = () => {
	return (
		<button className="form__button" type="submit">Сохранить</button>
	);
};