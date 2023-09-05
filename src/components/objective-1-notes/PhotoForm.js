import { connect } from "react-redux";
import { changeValue, getPhotoOfTheDay } from "../actions/photoFormAction";
import reactstrap, {Spinner, Card, CardTitle} from "reactstrap";

const PhotoForm = (props) => {
    return (
        <div >
            {props.isFetching ? <Spinner id = "spinner">
                Loading...
            </Spinner> :
            <div id = "secondary">
            <input type = "date" value = {props.newUrl} 
            onChange={(e)=> props.changeValue(e.target.value)} name = "newUrl"
            id = "newUrl"/>
            <button onClick = {()=> props.getPhotoOfTheDay(props.newUrl)} id = "button" >Search Date</button>
        </div>
        }
        {props.errorMessage && <h5 style = {{backgroundColor : "white"}}>{props.errorMessage}</h5>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newUrl : state.photoReducer.newUrl,
        errorMessage : state.photoReducer.errorMessage,
        isFetching : state.photoReducer.isFetching
    }
}

export default connect(mapStateToProps,{changeValue, getPhotoOfTheDay})(PhotoForm);