const url="https://striveschool-api.herokuapp.com/api/movies"

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
console.log(urlParams)
const id = urlParams.get("_id")
let genre=urlParams.get("category")
console.log(genre)
console.log(id)
let movieId=null
let form =document.querySelector("form")
const postData = async (movie) => {
    try {
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzY3ZmU3MzczODAwMTUzNzQzN2IiLCJpYXQiOjE2NzQyMDg4NTksImV4cCI6MTY3NTQxODQ1OX0.gEcWTfkkfurSo5Q_HUv5f7dwOo2lcHnS6VFwckZlU00",
        }
      })
     let data=await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const submitMovies = () => {
    let movie = {
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      category: document.querySelector("#category").value,
      imageUrl: document.querySelector("#url").value
    }
    postData(movie)
    
  }

let h1=document.createElement("h1")

const getMoviesByGenre = async (genre) => {
    try {
      let res = await fetch(url+"/"+genre, {
      
      method:"GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzY3ZmU3MzczODAwMTUzNzQzN2IiLCJpYXQiOjE2NzQyMDg4NTksImV4cCI6MTY3NTQxODQ1OX0.gEcWTfkkfurSo5Q_HUv5f7dwOo2lcHnS6VFwckZlU00",
        }
      })
   if(res.ok){
      let movies= await res.json()
   
      console.log(movies)
      displayMoviesByGenre(movies)
   }
    } catch (error) {
      console.log(error)
    }
  }
  const displayMoviesByGenre=(movies)=>{
    let row=document.createElement("div")
    row.classList.add("row")
   let body=document.querySelector("body")
   body.appendChild(row)
 let h1=document.getElementById("genre")
 
    row.innerHTML=""
    
    
    movies.forEach(singleMovie => {
    //   h1.innerText=`${singleMovie.category}`
      row.innerHTML+=`
      <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Genre</th>
              <th scope="col">Description</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td><img src="${singleMovie.imageUrl}" alt=""></td>
            <td>${singleMovie.name}</td>
              <td>${singleMovie.category}</td>
              <td>${singleMovie.description}</td>  
              <td> <a href="./backOffice.html?id=${singleMovie._id}" onclick="updateMovie()">  <button class="btn btn-info">Edit</button></a></td>
              <td>  <button class="btn btn-danger" onclick="deleteMovie(${singleMovie._id})">Delete</button></td>
            </tr>
          </tbody>
        </table>
      `
   } )

}
window.onload=getMoviesByGenre(genre="action")
window.onload=getMoviesByGenre(genre="horror")
window.onload=getMoviesByGenre(genre="none")
let btn=document.querySelector(".btn .btn-primary")
function change(){
  
    btn.innerHTML="onclick=updateMovie()"
}

const updateMovie=async(movieId=id)=>{
 try{
    
//  submitMovie.preventDefault()
 const editedMovie={
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    category: document.querySelector("#category").value,
    imageUrl: document.querySelector("#url").value
 }
 const res=await fetch(url+"/"+movieId,{
    method:"PUT",
    body:JSON.stringify(editedMovie),
    headers:new Headers({
        "Content-Type": "application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzY3ZmU3MzczODAwMTUzNzQzN2IiLCJpYXQiOjE2NzQyMDg4NTksImV4cCI6MTY3NTQxODQ1OX0.gEcWTfkkfurSo5Q_HUv5f7dwOo2lcHnS6VFwckZlU00",
    })
   
 })


 if(res.ok){
    console.log("succes")
    change()
 }
 }catch(err){
    console.log(err)
 }
}

  const deleteMovie= async (movieId=id)=>{
    try {
      
        let res = await fetch(url+"/"+movieId, {
          method: "DELETE",
      
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzY3ZmU3MzczODAwMTUzNzQzN2IiLCJpYXQiOjE2NzQyMDg4NTksImV4cCI6MTY3NTQxODQ1OX0.gEcWTfkkfurSo5Q_HUv5f7dwOo2lcHnS6VFwckZlU00",
          })
        
        })
     console.log("succes")
    
  }catch(err){
    console.log(res)
    console.log(err)
    
  }

  }

