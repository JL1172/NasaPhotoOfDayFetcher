import { useEffect } from "react";
import { API_KEY, InitialFetch, url } from "../API_KEY/api_key";
import { CHANGE_VALUE, FETCH_WAS_A_FAILURE, FETCH_WAS_A_SUCCESS, IS_FETCHING } from "../actions/photoFormAction";
import axios from "axios";

const initialState = {
    apiKey : API_KEY,
    defaultUrl : `https://apod.nasa.gov/apod/image/2309/CrescentBubble_AlHarbi_1080.jpg`,
    url : "https://apod.nasa.gov/apod/image/2309/CrescentBubble_AlHarbi_1080.jpg",
    newUrl : "",
    isFetching : false,
    errorMessage : "",
}

export const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case(CHANGE_VALUE) : 
            return({...state, newUrl : action.payload});
        case(IS_FETCHING) : 
            return({...state, isFetching : action.payload});
        case(FETCH_WAS_A_SUCCESS) :
            return({...state, isFetching : false, url : action.payload, newUrl : ""});
        case(FETCH_WAS_A_FAILURE) : 
            return({...state, isFetching : false, errorMessage : action.payload,
            url : state.defaultUrl});
        default : 
            return(state); 
    }
}