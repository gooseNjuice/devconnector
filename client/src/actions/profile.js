import axios from 'axios'
import {setAlert} from "./alert"

import {ACCOUNT_DELETED, CLEAR_PROFILE, DELETE_ACCOUNT, GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE} from "./types"

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        }
        const res = await axios.post('/api/profile', formData, config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        dispatch(setAlert(edit ? 'Profile updated' : 'Profile created',
            'success'))
        if (!edit) {
            history.push('/dashboard')
        }
    } catch (e) {
        const errors = e.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
}

// Add Experience
export const addExperience = (formData, history) => async dispatch => {

    try {
        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        }
        const res = await axios.put('/api/profile/experience', formData, config)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        dispatch(setAlert('Experience added',
            'success'))
            history.push('/dashboard')
    } catch (e) {
        const errors = e.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
}
// Add Education
export const addEducation = (formData, history) => async dispatch => {

    try {
        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        }
        const res = await axios.put('/api/profile/education', formData, config)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        dispatch(setAlert('Education added',
            'success'))
        history.push('/dashboard')
    } catch (e) {
        const errors = e.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
}

// Delete experience
export const deleteExperience = id => async dispatch =>{
    try {
        const res= await axios.delete(`/api/profile/experience/${id}`)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })
        dispatch(setAlert('Experience removed',
            'success'))
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
}
// Delete education
export const deleteEducation = id => async dispatch =>{
    try {
        const res= await axios.delete(`/api/profile/education/${id}`)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })
        dispatch(setAlert('Education removed',
            'success'))
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
}

// Delete account & profile
export const deleteAccount = id => async dispatch =>{
    if(window.confirm('Are you sure? This can NOT be undone!'))
    try {
        const res= await axios.delete(`/api/profile/`)
        dispatch({type: CLEAR_PROFILE})
        dispatch({type: ACCOUNT_DELETED})
        dispatch(setAlert('Your account has been permanently deleted'))
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
}
