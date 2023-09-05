import { useEffect } from "react";
import { API_KEY, InitialFetch, url } from "../API_KEY/api_key";
import { ADD_FAVORITE, CHANGE_VALUE, FETCH_INFORMATION, FETCH_WAS_A_FAILURE, FETCH_WAS_A_SUCCESS, GET_MORE_INFO, IS_FETCHING, IS_STAR_FALSE, TOGGLE_FAVORITES } from "../actions/photoFormAction";
import axios from "axios";


export const initialState = {
    apiKey : API_KEY,
    defaultUrl : `https://apod.nasa.gov/apod/image/2309/CrescentBubble_AlHarbi_1080.jpg`,
    url : "",
    newUrl : "",
    isFetching : false,
    errorMessage : "",
    information : "",
    showInformation : true,
    favorited : false,
    favoritePictures : [],
    showFavorites : false,
    starVisible : true,
}

export const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case(CHANGE_VALUE) : 
            return({...state, newUrl : action.payload, starVisible : true});
        case(IS_FETCHING) : 
            return({...state, isFetching : action.payload});
        case(FETCH_WAS_A_SUCCESS) :
            return({...state, isFetching : false, url : action.payload, newUrl : "", errorMessage : "",favorited : false});
        case(FETCH_WAS_A_FAILURE) : 
            return({...state, isFetching : false, errorMessage : action.payload,
            url : state.defaultUrl});
        case(FETCH_INFORMATION) : 
       
            return({...state, information : action.payload})
        case(GET_MORE_INFO) :
            return({...state, showInformation : !state.showInformation})
        case ADD_FAVORITE :
        let found = state.favoritePictures.find(n => n.url === action.payload.url);
            if (found && Object.keys(found).length > 0) {
                return({...state, favoritePictures : state.favoritePictures.filter(n => n.url !== action.payload.url), favorited : !state.favorited})
            } else {
                return({...state, favorited : !state.favorited, favoritePictures : [...state.favoritePictures, action.payload]})
            }
        case(TOGGLE_FAVORITES) :
            return({...state, showFavorites : !state.showFavorites})
        case(IS_STAR_FALSE) :
            return({...state, starVisible : false})
        default : 
            return(state); 
    }
}