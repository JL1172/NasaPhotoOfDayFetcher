import logo from './logo.svg';
import './App.css';
import PhotoForm from './components/objective-1-notes/PhotoForm';
import { connect } from 'react-redux';
import styled from "styled-components";
import { keyframes } from "styled-components";
import { getMoreInfo } from './components/actions/photoFormAction';
import FavoritedList from './components/objective-1-notes/FavoritedList';

const kf = keyframes`
0% {
  opacity : .3;
  transform : translateY(-15rem);
}
50% {
  opacity : .7;
}
100% {
  opacity : 1;
  transform : translateY(2rem);
}
`

const MainDiv = styled.div`
z-index : 1;
height : 100vh;
width : 100%;
display : flex;
justify-content : center;
align-items : flex-end;

filter : ${props => props.showInformation || props.showFavorites ? "brightness(35%)" : ""};
`
const StyledDiv = styled.div`
z-index : 2;
background-color : white;
height : fit-content;
width : 45rem;
position : absolute;
opacity : 0;
top : 0;
align-self : center;
animation : ${kf} .4s ease-in-out forwards;
box-shadow : 0 0 1em lightgrey;
border-radius : 5px;
padding : 0 .5rem 0 .5rem;
`


function App(props) {
  return (
    <div id="main" >
      <section id = "section">
      <FavoritedList />
      </section>
      {props.showInformation &&
        <StyledDiv id = "divv" showInformation={props.showInformation}>
          <span onClick={()=> props.getMoreInfo()} className="material-symbols-outlined">
            close
          </span>
          <h5>{props.information.title}</h5>
          <p>{props.information.explanation}</p>
        </StyledDiv>}
      <MainDiv showFavorites = {props.showFavorites} showInformation={props.showInformation}
        style={{ backgroundImage: `url(${props.url})` }} >
        <PhotoForm />
      </MainDiv>
    </div>
  );
}

const mapStateToProps = state => {

  return {
    isFetching: state.photoReducer.isFetching,
    url: state.photoReducer.url,
    showInformation: state.photoReducer.showInformation,
    information: state.photoReducer.information,
    showFavorites : state.photoReducer.showFavorites,
  }
}

export default connect(mapStateToProps, {getMoreInfo})(App);
