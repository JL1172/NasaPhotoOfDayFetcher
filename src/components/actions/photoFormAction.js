import axios from "axios";
export const CHANGE_VALUE = "CHANGE_VALUE";
export const SUBMIT_DATE_QUERY = "SUBMIT_DATE_QUERY";
export const IS_FETCHING = "IS_FETCHING";
export const FETCH_WAS_A_SUCCESS = "FETCH_WAS_A_SUCCESS";
export const FETCH_WAS_A_FAILURE = "FETCH_WAS_A_FAILURE";
export const FETCH_INFORMATION = "FETCH_INFORMATION";
export const GET_MORE_INFO = "GET_MORE_INFO";
export const ADD_FAVORITE = "ADD_FAVORITE"; 
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES"; 

const API_KEY = ''; //!make sure you delete this before pushing publicly
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export const getPhotoOfTheDay = (newDate) => dispatch => {
    dispatch(setIsFetching(true));
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${newDate}`)
    .then(res=> {
        dispatch(fetchInformation(res.data))
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

const fetchInformation = (data) => {
    return {type : FETCH_INFORMATION, payload : data}
}
export const getMoreInfo = () => {
    return{type : GET_MORE_INFO}
}
export const addFavorite = (data) => {
    return{type : ADD_FAVORITE, payload : {...data}}
}
export const toggleFavorites = () => {
    return{type : TOGGLE_FAVORITES}
}