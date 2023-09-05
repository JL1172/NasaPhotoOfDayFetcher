import logo from './logo.svg';
import './App.css';
import PhotoForm from './components/objective-1-notes/PhotoForm';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <div id = "main" style = {{backgroundImage : `url(${props.url})`}} >
      <header id = "absolute"></header>
        <PhotoForm />
    </div>
  );
}

const mapStateToProps = state => {

  return {
    isFetching : state.photoReducer.isFetching,
    url : state.photoReducer.url,
  }
}

export default connect(mapStateToProps,{})(App);
