import { useEffect } from "react";
import { API_KEY, InitialFetch, url } from "../API_KEY/api_key";
import { CHANGE_VALUE, FETCH_INFORMATION, FETCH_WAS_A_FAILURE, FETCH_WAS_A_SUCCESS, GET_MORE_INFO, IS_FETCHING } from "../actions/photoFormAction";
import axios from "axios";

export const initialState = {
    apiKey : API_KEY,
    defaultUrl : `https://apod.nasa.gov/apod/image/2309/CrescentBubble_AlHarbi_1080.jpg`,
    url : "",
    newUrl : "",
    isFetching : false,
    errorMessage : "",
    information : "",
    showInformation : false,
}

export const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case(CHANGE_VALUE) : 
            return({...state, newUrl : action.payload, showInformation : false});
        case(IS_FETCHING) : 
            return({...state, isFetching : action.payload});
        case(FETCH_WAS_A_SUCCESS) :
            return({...state, isFetching : false, url : action.payload, newUrl : "", errorMessage : ""});
        case(FETCH_WAS_A_FAILURE) : 
            return({...state, isFetching : false, errorMessage : action.payload,
            url : state.defaultUrl});
        case(FETCH_INFORMATION) : 
        console.log(action.payload)
            return({...state, information : action.payload})
        case(GET_MORE_INFO) :
            return({...state, showInformation : !state.showInformation})
        default : 
            return(state); 
    }
}