// const dispatch = useDispatch(); 
// dispatch({ type: 'CHANGE_DIALOG' }); 값을 생신할 때
// const isShowDialog = useSelector((state: any) => state.isShowDialog); 값을 쓸 때

//type

const CHANGE_DIALOG = 'CHANGE_DIALOG';
const UPDATE_OPTION = 'UPDATE_OPTION';

//action?

const initialState = {
	isShowDialog: false,
	nowOption: "none-none-none-none"
};

interface IActions{
	type: string,
	text: string
}

const reducer = (state: any = initialState, action:IActions) => {

	switch (action.type){
		case CHANGE_DIALOG:
			return{
				...state,
				isShowDialog: !state.isShowDialog
			}
		case UPDATE_OPTION:
			return{
				...state,
				nowOption: action.text
			}
		default:
			return state;
	}
}


export default reducer;