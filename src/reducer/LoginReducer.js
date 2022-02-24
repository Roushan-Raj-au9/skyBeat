const LoginReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'LOGIN_ACTION' :
            return{
                ...state, userInfo : action.payload
            }

        default:
            return state
    }
}

export default LoginReducer;