import { connect } from "react-redux"
import { ADD_FAVORITE, addFavorite, changeValue, getPhotoOfTheDay, isStarFalse, toggleFavorites } from "../actions/photoFormAction"
import styled from "styled-components";
import { keyframes } from "styled-components";


const kf2 = keyframes`
0% {
    transform : translateX(-10rem);
    width  : 0rem;
    opacity : .3;
}
50% {
    opacity : .5;
}
100% {
    transform : translateX(0);
    width : 18rem;
    opacity : 1;
}
`

const StyledFavorite = styled.div`
color : black;
display : ${props => props.showFavorites ? "flex" : "none"};
animation : ${kf2} .6s ease-in-out forwards; 
flex-direction : column;
align-items : baseline;
background-color : lightgray;
width : 0;
height :59.5rem;
z-index : 3;
opacity : 1;
border-right: 2px solid lightgrey;
h4 {
    margin-bottom : 1rem;
    margin-top : 1rem;
    display : flex;
    justify-content  : center;
    width : 16rem;
}
section {
    background-color : white;
    margin : .5rem .5rem .5rem .5rem;
    padding : 0 .4rem 0 .4rem;
    border-radius : 5px;
    display : flex;
    align-items : center;
div:hover {
    color : royalblue;
    text-decoration : underline;
}
}

`

const FavoritedList = (props) => {
    const { showFavorites } = props;
    const submit = (data) => {
        props.getPhotoOfTheDay(data);
        props.isStarFalse()
    }
    return (
        <StyledFavorite showFavorites={showFavorites}>
            <div id="first">
                <span  style = {{cursor : "pointer"}} onClick={()=> props.toggleFavorites()} class="material-symbols-outlined">
                    close
                </span>
                <h4>Favorite List</h4>
                {props.favoritePictures && props.favoritePictures.map((n, i) => {
                    return <section><div  style = {{cursor : "pointer"}} onClick={()=>submit(n.date)}  key={i}>{n.title}--{n.date}</div>
                    <span onClick={()=> props.addFavorite(n)} style = {{cursor : "pointer"}} class="material-symbols-outlined">
                    delete
                    </span></section>
                })}
            </div>
        </StyledFavorite>
    )
}

const mapStateToProps = state => {
    return {
        favorited: state.photoReducer.favorited,
        favoritePictures: state.photoReducer.favoritePictures,
        showFavorites: state.photoReducer.showFavorites,
    }
}

export default connect(mapStateToProps, { addFavorite, toggleFavorites, getPhotoOfTheDay, isStarFalse })(FavoritedList);