// const dispatch = useDispatch(); 
// dispatch({ type: 'CHANGE_DIALOG' }); 값을 생신할 때
// const isShowDialog = useSelector((state: any) => state.isShowDialog); 값을 쓸 때

//type

const CHANGE_DIALOG = 'CHANGE_DIALOG';
const UPDATE_OPTION = 'UPDATE_OPTION';

//action?

interface IProps{
	isShowDialog: boolean,
	nowOption: object
}

const initialState: IProps = {
	isShowDialog: false,
	nowOption: {
		"JavaScript Framework": "none",
		"JavaScript Superset": "none",
		"JavaScript Library": "none",
		"CSS in Js": "none",
	}
};

interface IActions{
	type: string,
	option: string,
	title: string
}

const reducer = (state: any = initialState, action: IActions) => {

	switch (action.type){
		case CHANGE_DIALOG:
			return{
				...state,
				isShowDialog: !state.isShowDialog
			}
		case UPDATE_OPTION:
			return{
				...state,
				nowOption: {[action.title]: [action.option]}
			}
		default:
			return state;
	}
}


export default reducer;