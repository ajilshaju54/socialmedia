import axios from "axios";
import {LoginFailure, LoginStart, LoginSuccess} from "./redux/action"

export const loginCall = (userCredential) => async (dispatch)=>{
    dispatch(LoginStart());
    try{
        const res = await axios.post("/auth/login", userCredential);
        dispatch(LoginSuccess(res.data));
    }catch(err){
        dispatch(LoginFailure(err))
    }
}