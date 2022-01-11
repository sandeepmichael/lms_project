import React from 'react'


const courses = () => {
    
                    


    const courses1 = "We are very sure that you are not just going to love it, but this would take you from where you now are to a whole new level. This is a very key program that would be a game-changer and would truly help you become your transformed version 2.0."
const onSubmit = () => {
    localStorage.removeItem("token")
    window.location.href = '/login'
}

    return (
        <div className='App'>
                  <nav class="navbar navbar-dark bg-dark">
  <a  class="navbar-brand" href="/dashboard">Dashboard</a>
</nav>
    
            <h1>courses</h1>
            <div>
  <button style={{marginLeft:'90%'}} type="submit" class="btn btn-danger" onClick={onSubmit}>Logout </button>
  </div>
             <div class="form-group">
    <label for="exampleFormControlTextarea1">Course Page</label>
    <div class="jumbotron">
  <h1 class="display-4">Welcome To The Program</h1>
  <p class="lead">Hey, it’s your virtual mentor and more than anything else I would like to welcome you to this program and say a huge bravo for your investment in this program.

There are things you are going to learn about that would not just shift your mindset, make you more productive, help you focus better but in the end, make you more successful as a person.

During the course of this program, we are going to learn ideas that are going to challenge your preconceived notions about life and everything that you may have learned from your environment while growing up. This is the reason we want you to be completely open to the ideas we will share, pick up the ones which inspire you the most, and discard the rest.
  </p>
  <hr class="my-4"/>


  <iframe width="660" height="415" src="https://www.youtube.com/embed/zb3Qk8SG5Ms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <hr/>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Mark Completed</a>
  </p>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
   
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>
    <span>{courses1}</span>
  </div>
  
  
        </div>
   
    )
}

export default courses
