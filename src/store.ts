function reducer(currentState: any, action:{type: any}) {

	if (currentState === undefined) {
		return {
			isShowDialog: false,
		};
	}

	const newState = {...currentState};
	
	if (action.type === 'ChangeDialog') {
		newState.isShowDialog = !newState.isShowDialog;
        console.log(newState);
	}

	return newState;
}

export default reducer;