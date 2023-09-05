import axios from "axios";
export const CHANGE_VALUE = "CHANGE_VALUE";
export const SUBMIT_DATE_QUERY = "SUBMIT_DATE_QUERY";
export const IS_FETCHING = "IS_FETCHING";
export const FETCH_WAS_A_SUCCESS = "FETCH_WAS_A_SUCCESS";
export const FETCH_WAS_A_FAILURE = "FETCH_WAS_A_FAILURE";

const API_KEY = 'kDNGcwxyNNZQaaCcbUbdhGjP1jVB68YbmpkhjlS4';
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export const getPhotoOfTheDay = (newDate) => dispatch => {
    dispatch(setIsFetching(true));
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${newDate}`)
    .then(res=> {
        dispatch(fetchWasASuccess(res.data.url));
    },(err) => {
        const errorMessage = err.message;
        dispatch(fetchWasAFailure(errorMessage))
    })
}

export const changeValue = (value) => {
    return {type : CHANGE_VALUE, payload : value};
}

const setIsFetching = (isFetching) => { //THIS WILL BRING LOADING CIRCLE
    return { type: IS_FETCHING, payload: isFetching }
}

const fetchWasASuccess = (photo) => { //THIS IS WHERE THE VALUE WILL BE PASSED IN 
    return { type: FETCH_WAS_A_SUCCESS, payload: photo }
}

const fetchWasAFailure = (errorMessage) => {
    return { type: FETCH_WAS_A_FAILURE, payload: errorMessage }
}