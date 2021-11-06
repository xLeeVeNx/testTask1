// Import from libs
import React from 'react';

// Import components
import { Title } from '../../Title/Title';
import { MainInput } from '../../MainInput/MainInput';

// Import types
import { PersonalDataPropsType } from './PersonalDataType';

// Main code
export const PersonalData: React.FC<PersonalDataPropsType> = () => {
	return (
		<div className="form__personal">
			<Title title="Персональные данные" />
			<MainInput type="text" placeholder="Имя" name="name" />
			<MainInput type="number" placeholder="Возраст" name="age" />
		</div>
	);
};