export type FormStateType = {
	name: string;
	age: string;
	children: ChildType[];
}
export type ChildType = {
	id: string,
	name: string;
	age: string;
}
export type ActionsType = ReturnType<typeof formAC>
const initialState: FormStateType = {
	name: '',
	age: '',
	children: []
};
const ADD_FORM = 'ADD_FORM';

export const formReducer = (state = initialState, action: ActionsType): FormStateType => {
	switch (action.type) {
		case 'ADD_FORM': {
			return {
				name: action.data.name,
				age: action.data.age,
				children: action.data.children
			};
		}

		default: {
			return {...state};
		}
	}
};

export const formAC = ({name, age, children}: FormStateType) => {
	return ({
		type: ADD_FORM,
		data: {name, age, children}
	});
};