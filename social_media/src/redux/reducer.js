const initialstate = {
    user:null,
    isFetching:true,
    error:false
}

function appReducer(prevState = initialstate,action){
    switch(action.type){
        case "LOGIN_START":
        return{
            user:null,
            isFetching:true,
            error:false,
        };
        case "LOGIN_SUCCESS":
            return{
            user:action.payload,
            isFetching:false,
            error:false,
            };
            case "LOGIN FAILER":
                return{
                    user:null,
                    isFetching:false,
                    error:action.payload,
                }
        }
}

export default appReducer