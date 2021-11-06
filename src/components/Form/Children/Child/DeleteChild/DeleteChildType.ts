import { ChildType } from '../../../../../redux/reducers/form-reducer';

export type DeleteChildPropsType = {
	remove: (index: number) => void;
	index: number;
}