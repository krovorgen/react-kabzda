type ActionType = {
    type: 'TOGGLE' | string;
};

export type StateType = {
    collapsed: boolean;
};

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, collapsed: !state.collapsed };
        default:
            throw new Error('Error action type');
    }
};

export default reducer;
