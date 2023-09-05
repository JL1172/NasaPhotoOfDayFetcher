import { connect } from "react-redux";
import { changeValue, getMoreInfo, getPhotoOfTheDay } from "../actions/photoFormAction";
import reactstrap, { Spinner, Card, CardTitle } from "reactstrap";

const PhotoForm = (props) => {
    return (
        <div >
            {props.isFetching ? <Spinner id="spinner">
                Loading...
            </Spinner> :
                <div id="secondary">
                    <div onClick={()=> props.getMoreInfo()} style = {{display : "flex", alignItems : "baseline"}}>
                    <input type="date" value={props.newUrl}
                        onChange={(e) => props.changeValue(e.target.value)} name="newUrl"
                        id="newUrl" />
                    <span className="material-symbols-outlined">
                        more_horiz
                    </span>
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
        isFetching: state.photoReducer.isFetching
    }
}

export default connect(mapStateToProps, { changeValue, getPhotoOfTheDay, getMoreInfo })(PhotoForm);