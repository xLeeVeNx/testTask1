// Import from libs
import React from 'react';
import { useSelector } from 'react-redux';

// Import styles
import './Preview.scss';

// Import components
import { Title } from '../Title/Title';

// Import types
import { rootReducerType } from '../../redux/store';
import { FormStateType } from '../../redux/reducers/form-reducer';

// Utils
import { ageToStr } from '../../utils/pureFunctions';
import { ChildItem } from './ChildItem/ChildItem';

// Main code
export const Preview = () => {
	const state = useSelector<rootReducerType, FormStateType>(state => state.form);
	return (
		<section className="preview">
			<div className="container">
				<div className="preview__inner">
					<Title title="Персональные данные" />

					<div className="preview__personal">
						{
							state.name && state.name + ', ' + ageToStr(+state.age)
						}

					</div>

					<div className="preview__children">
						<div className="preview__children-text">Дети</div>

						<ul className="preview__children-list">
							{
								state.children.map(child =>
									<ChildItem key={ child.id } name={ child.name } age={ child.age } />
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};