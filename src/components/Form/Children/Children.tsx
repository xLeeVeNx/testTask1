// Import from libs
import { FieldArray } from 'formik';
import React from 'react';

// Import components
import { Title } from '../../Title/Title';
import { AddChild } from './AddChild/AddChild';
import { Child } from './Child/Child';

// Import types
import { ChildrenPropsType } from './ChildrenType';

// Main code
export const Children: React.FC<ChildrenPropsType> =
	({values}) => {
		return (
			<div className="form__children">
				<FieldArray name="children">
					{
						(FieldArrayProps => {
							const [ push, remove, children ] =
								[ FieldArrayProps.push, FieldArrayProps.remove, values.children ];
							return (
								<>
									<div className="form__children-box">
										<Title title="Дети (макс. 5)" />
										<AddChild push={ push } children={ children } />
									</div>

									{
										children.length > 0 && children.map((child, index) => (
												<Child key={ child.id } index={ index } remove={ remove } />
											)
										)
									}
								</>
							);
						})
					}
				</FieldArray>
			</div>
		);
	};