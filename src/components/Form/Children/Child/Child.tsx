// Import from libs
import React from 'react';

// Import components
import { MainInput } from '../../../MainInput/MainInput';
import { DeleteChild } from './DeleteChild/DeleteChild';

// Import types
import { ChildPropsType } from './ChildType';

// Main code
export const Child: React.FC<ChildPropsType> =
	({index, remove}) => {
		return (
			<div className="form__children-box">
				<MainInput type="text" placeholder="Имя" name={ `children.${ index }.name` } />
				<MainInput type="number" placeholder="Возраст" name={ `children.${ index }.age` } />
				<DeleteChild remove={ remove } index={ index } />
			</div>
		);
	};