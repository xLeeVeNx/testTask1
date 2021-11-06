// Import from libs
import React from 'react';

// Import types
import { ErrorMessage, Field } from 'formik';
import { MainInputPropsType } from './MainInputType';

// Main code
export const MainInput: React.FC<MainInputPropsType> =
	({type, placeholder, name}) => {
		return (
			<label className="form__label">
				<span className="form__placeholder">{ placeholder }</span>
				<Field className="form__input" type={ type } name={ name } />
				<ErrorMessage name={ name } component="div" className="error" />
			</label>
		);
	};