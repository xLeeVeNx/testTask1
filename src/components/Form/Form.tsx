// Import from libs
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

// Import styles
import './Form.scss';

// Import components
import { PersonalData } from './PersonalData/PersonalData';
import { Children } from './Children/Children';
import { SaveButton } from './SaveButton/SaveButton';

// Import types and AC
import { FormStateType, formAC } from '../../redux/reducers/form-reducer';

//Main code
const validateSchema = Yup.object().shape({
	name: Yup.string().min(2, 'Слишком короткое имя').max(40, 'Слишком длинное имя').required('Поле "Имя" обязательно'),
	age: Yup.number().min(18, 'Вы должны быть старше 18 лет').max(118, 'Извините, Вы слишком стары').required('Поле "Возраст" обязательно'),
	children: Yup.array().of(
		Yup.object().shape({
			name: Yup.string().min(2, 'Слишком короткое имя').max(40, 'Слишком длинное имя').required('Поле "Имя" обязательно'),
			age: Yup.number().min(0, 'Возраст не может быть отрицательным').max(118, 'Извините, Вы слишком стары').required('Поле "Возраст" обязательно')
		})
	)
});
const initialState: FormStateType = {
	name: '',
	age: '',
	children: []
};

export const Form = () => {
	const dispatch = useDispatch();

	return <Formik initialValues={ initialState } onSubmit={ (values: FormStateType) => {
		dispatch(formAC(values));
	} }
	               validationSchema={ validateSchema }>
		{
			({values, handleSubmit}) => (
				<form className="form" onSubmit={ handleSubmit }>
					<div className="container">
						<div className="form__inner">
							<PersonalData />
							<Children values={ values } />
							<SaveButton />
						</div>
					</div>
				</form>
			)
		}
	</Formik>;
};