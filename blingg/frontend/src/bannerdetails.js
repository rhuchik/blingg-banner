import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'


const Banner = ({getimages,images}) => {
    const [image,setimage]=useState([images])
    useEffect(()=>{
        getimages()
    },[])

    return (
      <div className="mx-4" style={grid}>
        
           {images.map((text) => (
              <div
              className="card d-flex align-items-center justify-content-center mx-3 my-4 text-center "
              style={{ minHeight: "8rem",marginLeft:'3rem' ,maxWidth:"25rem" }}
            >
               <Link to={`/details`} className="btn btn-dark btn-sm my-1" style={{color:'white'}}>
               <img style={{ width: "20rem",}} src={require(`${text.item}`)}/>
                </Link>
              
              <div>
              <a href={text.url} className="btn btn-dark rounded-pill btn-sm my-1" style={{color:'white'}}>
                 More
              </a>
              </div>
              
            </div>
          

        ))}
       
      </div>
    );
  }


const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
  marginTop: "2rem",
};
export default Banner;
