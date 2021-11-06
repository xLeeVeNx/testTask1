import { ChildType } from '../../../../redux/reducers/form-reducer';

export type AddChildPropsType = {
	push: (obj: ChildType) => void;
	children: ChildType[];
}