export const LoginStart = (usercredentials) =>({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) =>({
    type: "LOGIN_SUCCESS",
    payload:user,
});

export const LoginFailure = (err) =>({
    type: "LOGIN_FAILURE",
    payload:err,
})
