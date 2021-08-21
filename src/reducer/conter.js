export const SET_DIFF_REQUEST = 'SET_DIFF_REQUEST '
export const INCREASE_REQUEST = 'INCREASE_REQUEST '
export const DECREASE_REQUEST = 'DECREASE_REQUEST '

export const SET_DIFF_SUCCESS = 'SET_DIFF_SUCCESS '
export const INCREASE_SUCCESS = 'INCREASE_SUCCESS '
export const DECREASE_SUCCESS = 'DECREASE_SUCCESS '

export const SET_DIFF_FALSE = 'SET_DIFF_FALSE'
export const INCREASE_FALSE = 'INCREASE_FALSE'
export const DECREASE_FALSE = 'DECREASE_FALSE'

export const increase = () => {
    return {
        type: INCREASE_REQUEST
    }
}

export const decrease = () => {
    return {
        type: DECREASE_REQUEST
    }
}

export const setDiff = (data) => {
    return {
        type: SET_DIFF_REQUEST, data
    }
}

//초기화
const initialState = {
    currentDataState: {
        number: 0,
        diff: 1,
    },
    currentState: {
        increaseLoading: false,
        increaseDone: false,
        increaseError: null,

        decreaseLoading: false,
        decreaseDone: false,
        decreaseError: null,

        setDiffLoading: false,
        setDiffDone: false,
        setDiffError: null,
    }
}

//reducer
export default function counter(state = initialState, action) {
    let obj = {}

    switch (action.type) {
        case INCREASE_REQUEST:
            console.log('increase action INCREASE_REQUEST reducer ')
            obj = {
                currentDataState: state.currentDataState,
                currentState: {
                    ...state.currentState,
                    increaseLoading: true,
                }
            }
            return obj;
        case INCREASE_SUCCESS:
            console.log('saga increass success reducer')
            obj = {
                currentDataState: {
                    ...state.currentDataState,
                    number: state.currentDataState.number + state.currentDataState.diff
                },
                currentState: {
                    ...state.currentState,
                    increaseLoading: false,
                    increaseDone: true,
                }
            }
            return obj;
        case INCREASE_FALSE:
            obj = {
                currentDataState: state.currentDataState,
                currentState: {
                    ...state.currentState,
                    increaseError: true
                }
            }
            return obj;


        case SET_DIFF_REQUEST:
            obj = {
                currentDataState: state.currentDataState,
                currentState: {
                    ...state.currentState,
                    setDiffLoading: true,
                }
            }
            return obj;
        case SET_DIFF_SUCCESS:
            obj = {
                currentDataState: {
                    ...state.currentDataState,
                    diff: action.data
                },
                currentState: {
                    ...state.currentState,
                    setDiffLoading: false,
                    setDiffDone: true,
                }
            }
            return obj;
        case SET_DIFF_FALSE:
            obj = {
                currentDataState: state.currentDataState,
                currentState: {
                    ...state.currentState,
                    setDiffError: true
                }
            }
            return obj;


        case DECREASE_REQUEST:
            obj = {
                currentDataState: state.currentDataState,
                currentState: {
                    ...state.currentState,
                    decreaseLoading: true,
                }
            }
            return obj;
        case DECREASE_SUCCESS:
            obj = {
                currentDataState: {
                    ...state.currentDataState,
                    number: state.currentDataState.number - state.currentDataState.diff
                },
                currentState: {
                    ...state.currentState,
                    decreaseLoading: false,
                    decreaseDone: true,
                }
            }
            return obj;
        case DECREASE_FALSE:
            obj = {
                currentDataState: state.currentDataState,
                currentState: {
                    ...state.currentState,
                    decreaseError: true
                }
            }
            return obj;

        default:
            return state
    }
}