import { connect } from "react-redux"
import { ADD_FAVORITE, addFavorite } from "../actions/photoFormAction"


const FavoritedList = (props) => {
    return (
        <div>
            {props.favoritePictures.map((n,i)=> {
                return <div key = {i}>{n}</div>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorited: state.photoReducer.favorited,
        favoritePictures: state.photoReducer.favoritePictures,
        date : state.photoReducer.information.date,
        title : state.photoReducer.information.title,
    }
}

export default connect(mapStateToProps, { addFavorite })(FavoritedList);