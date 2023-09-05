import { connect } from "react-redux";
import { addFavorite, changeValue, getMoreInfo, getPhotoOfTheDay, toggleFavorites } from "../actions/photoFormAction";
import reactstrap, { Spinner, Card, CardTitle, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import styled from "styled-components";
import {keyframes, css} from "styled-components";

const kf = keyframes`
0% {
    transform : rotate(270deg);
}
50% {
    transform : scale(2.1);
}
100% {
    transform : ""; 
}
`
const fly = keyframes`
0% {
    transform : translate(1rem);
    box-shadow : 0 0 2em orange;
    border-radius : 10rem;
}
15% {
    transform : translateY(-20rem);
}
100% {
    transform : translateY(-60rem);
}
`

const StyledImg = styled.img`
    cursor: pointer;
    ${props =>
    props.favorited && 
    css`
      animation: ${kf} 0.4s ease-in-out forwards;
    `}
`
const Rocket = styled.img`
width : 5rem;
position : absolute;
bottom : 4rem;
${props =>
    props.favorited && 
    css`
      animation: ${fly} 1s ease-in-out forwards;
    `}
`
const PhotoForm = (props) => {
    const favoriteHandler = () => {
        const obj = {
            title: props.information.title,
            date: props.information.date,
            url: props.url,
        }
        props.addFavorite(obj)
    }
    return (
        <div >
              <Rocket favorited = {props.favorited} src = "https://futicons.com/icons/svg/interplanetary/outline/rocket_with_boosters.svg" />
            {props.isFetching ? <Spinner id="spinner">
                Loading...
            </Spinner> :
                <div id="secondary">
                    <div style={{ width: "20rem", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                        <span  style = {{cursor : "pointer"}} id = "menuOpen" onClick = {()=> props.toggleFavorites()} class="material-symbols-outlined">
                            menu_open
                        </span>
                        <input type="date" value={props.newUrl}
                            onChange={(e) => props.changeValue(e.target.value)} name="newUrl"
                            id="newUrl" />
                        <span  style = {{cursor : "pointer"}}  id="Popover1" onClick={() => props.getMoreInfo()} className="material-symbols-outlined">
                            more_horiz
                        </span>
                        <StyledImg favorited = {props.favorited} onClick={() => favoriteHandler()} width={20}
                            src={props.favorited ? "https://www.svgrepo.com/show/361616/star-filled.svg" : "https://www.svgrepo.com/show/257711/favourite-star.svg"} />
                    </div>
                    <button onClick={() => props.getPhotoOfTheDay(props.newUrl)} id="button" >Search Date</button>
                </div>
            }
            {props.errorMessage && <h5 style={{ backgroundColor: "white" }}>{props.errorMessage}</h5>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newUrl: state.photoReducer.newUrl,
        errorMessage: state.photoReducer.errorMessage,
        isFetching: state.photoReducer.isFetching,
        showInformation: state.photoReducer.showInformation,
        favorited: state.photoReducer.favorited,
        url: state.photoReducer.url,
        information: state.photoReducer.information,
    }
}

export default connect(mapStateToProps, { changeValue, getPhotoOfTheDay, getMoreInfo, addFavorite, toggleFavorites })(PhotoForm);