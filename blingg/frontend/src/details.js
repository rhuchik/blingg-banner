import React,{useEffect} from 'react'

 const Details = ({getimages,images}) => {
    useEffect(()=>{
        getimages()
    },[])
    return (
        <div>
            {
                images.slice(0,1).map((text) => (
                    <div
              className="card d-flex align-items-center justify-content-center mx-3 my-4 text-center "
              style={{ minHeight: "8rem",marginLeft:'3rem' ,maxWidth:"25rem" }}
            >
                <h3>{text.name}</h3>
                <h3>{text.description}</h3>
                <h3>{text.url}</h3>
                

            </div>
                ))
            }
        </div>
    )
}
export default Details

