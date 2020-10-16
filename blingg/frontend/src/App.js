import React,{useState,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Details from './details'
import Navbar from './nav'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Main from './upload'
import Banner from './bannerdetails'


function App() {
  const [image,setImages]=useState([])
  const getimages = async (text) => {
    
    const res = await axios.get(
      'http://localhost:8080/images'
    );
    setImages(res.data);
    
  };
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Route exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Banner images={image} getimages={getimages}/>
                 
                </Fragment>
              )} />
      
      <Route exact
              path="/details"
              render={(props) => (
                <Fragment>
                  <Details
                    images={image} getimages={getimages}
                    
                  />
                </Fragment>
              )} />


<Route exact
              path="/upload"
              render={(props) => (
                <Fragment>
                  <Main
                    images={image} getimages={getimages}
                    
                  />
                </Fragment>
              )} />
      </div>
    </Router>
      
   
    
  );
}

export default App;
