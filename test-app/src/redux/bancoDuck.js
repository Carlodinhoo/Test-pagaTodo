import axios from 'axios'

//data
const dataInicial = {
    results: []
}

//constantes
const GET_ALL_SUCCES = "GET_ALL_SUCCES"
const CLEAR_ALL = "CLEAR_ALL"

//reducers
export default function bancosReducer(state = dataInicial, action){
    switch(action.type){
        case GET_ALL_SUCCES:
            return {...state, results: action.payload}
        case CLEAR_ALL:
            return dataInicial
        default:
            return state
    }
}

//acciones
export const getAllBancos = () => async(dispatch) => {
    try{
        const res = await axios.get('https://api.jsonbin.io/b/604006e581087a6a8b95b784')
        console.log("res ",res)
        dispatch({
            type: GET_ALL_SUCCES,
            payload: res.data
        })
    }catch(err){
        console.log(err)
    }
}

export const clearAll = () => (dispatch) => {
    try{
        dispatch({
            type: CLEAR_ALL
        })
    }catch(err){
        console.log(err)
    }
}