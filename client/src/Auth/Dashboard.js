import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PictureUploader from './proflie'


const Dashboard = (props) => {
    //const[user, setUser] = useState(null)
    const[name, setName] = useState(null)
    const getUser = async () => {
        const res = await axios.get('http://localhost:5000/auth', {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
           
        })
        //setUser(res.data)
        setName(res.data.name)
        //console.log(res.data)
    }

    useEffect(() => {
       getUser();
    })
    const logout = () => {
        localStorage.removeItem("token")
        props.history.push('/login')
    }

   if(!localStorage.getItem('token')){
     props.history.push('/login')
   }


    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
  <a style={{marginLeft:'40%'}} class="navbar-brand" href="/courses">Go to CoursesPage</a>
</nav>
    
        <div className="m-5">
        <div className="jumbotron">
          <p className="lead">Welcome {name}</p>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
          
        </div>
        <hr />
         <PictureUploader />
         <hr />
        <h1>Edit Account </h1>
        
        <form>
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>

  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"/>

  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Language</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>English</option>
      <option>Telugu</option>
    
    </select>
  </div>
  
 
  
  <button type="submit" class="btn btn-primary">Save</button>
</form>

      </div>
      </div>
    )
}

export default Dashboard
