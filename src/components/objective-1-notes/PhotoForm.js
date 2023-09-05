import { connect } from "react-redux";
import { addFavorite, changeValue, getMoreInfo, getPhotoOfTheDay } from "../actions/photoFormAction";
import reactstrap, { Spinner, Card, CardTitle, Popover, PopoverBody, PopoverHeader } from "reactstrap";

const PhotoForm = (props) => {
    return (
        <div >
            {props.isFetching ? <Spinner id="spinner">
                Loading...
            </Spinner> :
                <div id="secondary">
                    <div style={{ width : "20rem", display: "flex", justifyContent : "space-evenly", alignItems : "baseline" }}>
                        <input type="date" value={props.newUrl}
                            onChange={(e) => props.changeValue(e.target.value)} name="newUrl"
                            id="newUrl" />
                        <span id="Popover1" onClick={() => props.getMoreInfo()} className="material-symbols-outlined">
                        more_horiz
                        </span>
                        <img onClick={()=>props.addFavorite(props.url)} width={16} style = {{transition : '1s ease-in-out'}}
                        src ={props.favorited ? "https://www.svgrepo.com/show/361616/star-filled.svg" : "https://www.svgrepo.com/show/257711/favourite-star.svg"}/>
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
        favorited : state.photoReducer.favorited,
        url : state.photoReducer.url,
    }
}

export default connect(mapStateToProps, { changeValue, getPhotoOfTheDay, getMoreInfo, addFavorite })(PhotoForm);