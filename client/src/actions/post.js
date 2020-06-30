import axios from 'axios';
import {setAlert} from "./alert";
import {GET_POSTS, POST_ERROR, PROFILE_ERROR} from "./types";

// Get Posts
export const getPosts = () => async dispatch=>{
    try{
        const res = await axios.get('/api/posts')
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }catch (e) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: e.response.statusText,
                status: e.response.status}
        })
    }
}