export const LoginStart = (userCredentials) => ({
type:'LOGIN_START'
});

export const LoginSuccess = (user) =>({
    type:'LOGIN_SUCESS',
    payload: user
});

export const LoginFailure = ()=>({
    type:'LOGIN_FAILURE'
})

export const Logout = ()=>({
    type:'LOGOUT'
})
export const UpdateSuccess = (user) =>({
    type:'UPDATE_SUCESS',
    payload: user
});
export const UpdateFailure = (user) =>({
    type:'UPDATE_FAILURE',
});
export const DeleteSuccess = (user) =>({
    type:'DELETE_SUCESS',
    payload: user
});
export const DeleteFailure = (user) =>({
    type:'DELETE_FAILURE',
});