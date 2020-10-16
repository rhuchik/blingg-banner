import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Main.css'



class Main extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        file:'',
        name:'',
        description:'',
        url:''
      }
   
  }
  filechange=e=>{
      this.setState({
    files: e.target.files[0],
    loaded: 0,
    
  })
  }
   onChangeHandler=e=>{
    const value=e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]:value
      
    })
  }
  onClickHandler = () => {
    const data = new FormData()
    const{ file,name,description,url}=this.state
    const banner={
        file,name,description,url
    }
    data.append('file', this.state.files)
    data.append('name',name)
    data.append('description',description)
    data.append('url',url)

    axios.post("http://localhost:8080/upload", data, { 
       // receive two    parameter endpoint url ,form data
   }).then(res => { // then print response status
   
    this.setState={
      msg:res.data.msg
    }
   })
}
  

  render() {
    return (
      <div>
        <section>
  <div class="container p-5">
    
   
    


    <div class="row">
      <div class="col-lg-5 mx-auto">
        <div class="p-5 bg-dark  text-center shadow rounded-lg"><img src="https://res.cloudinary.com/mhmd/image/upload/v1557366994/img_epm3iz.png" alt="" width="200" class="d-block mx-auto mb-4 rounded-pill"/>
        <label>
             Title
        <input type="text" name="name" class="form-control"  onChange={this.onChangeHandler} style={{maxWidth:'60vw'}}/>
        </label>
        <label>
             Description
        <input type="text" name="description"class="form-control"  onChange={this.onChangeHandler} style={{maxWidth:'60vw'}}/>
        </label>
        <label>
             url
        <input type="text" name="url "class="form-control"  onChange={this.onChangeHandler}  style={{maxWidth:'60vw'}}/>
        </label>
        

         

          
          <label for="fileUpload" class="file-upload btn btn-primary  btn-block rounded-pill shadow"><i class="fa fa-upload mr-2"></i>Browse for Banner ...
                        <input id="fileUpload" onChange={this.filechange}  type="file"/>
                    </label>
          
          <a className="btn  btn-primary btn-block rounded-pill shadow my-1"  onClick={this.onClickHandler} >
                  upload
                </a>

        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    
    )
  }
}

export default Main;