//type

const CHANGE_BTN = 'CHANGE_BTN';
const CHANGE_DIALOG = 'CHANGE_DIALOG';

// const dispatch = useDispatch(); 
// dispatch({ type: 'CHANGE_DIALOG' }); 값을 생신할 때

// const isShowDialog = useSelector((state: any) => state.isShowDialog); 값을 쓸 때

const initialState = {
	isShowDialog: false,
	// meunState: ["none","none","none","none"]
};

const reducer = (state: any = initialState, action:{type: any}) => {

	switch (action.type){
		case CHANGE_DIALOG:
			return{
				...state,
				isShowDialog: !state.isShowDialog
			}
		default:
			return state;
	}
}


export default reducer;