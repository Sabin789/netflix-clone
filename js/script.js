const url="https://striveschool-api.herokuapp.com/api/movies"
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const genre=urlParams.get("category")
const id = urlParams.get("_id")


const getMovies = async () => {
    try {
      let res = await fetch(url, {
      
      method:"GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzY3ZmU3MzczODAwMTUzNzQzN2IiLCJpYXQiOjE2NzQyMDg4NTksImV4cCI6MTY3NTQxODQ1OX0.gEcWTfkkfurSo5Q_HUv5f7dwOo2lcHnS6VFwckZlU00",
        }
      })
   if(res.ok){
      let movies= await res.json()
      let row=document.querySelector(".row")
      console.log(movies)
   
  
    } }catch (error) {
      console.log(error)
    }
  }


//   window.onload=getMovies()
 let val=document.getElementById("select").value
 function con(){
    console.log(val)
 }

  const getMoviesByGenre = async (genre=val) => {
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
    let row=document.querySelector(".row")
   
 let h1=document.getElementById("genre")
 
    row.innerHTML=``
    movies.forEach(singleMovie => {
      h1.innerHTML=`${singleMovie.category}`
      row.innerHTML+=`
     
      <div class="col-sm-6 col-md-3 col-lg-2">
  
      <img class="img-fluid" src="${singleMovie.imageUrl}" alt="">
    </div>
      `
   } )}
    


    const getMoviesByID = async (_id=id) => {
        try {
          let res = await fetch(url+"?id="+_id, {
          
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
          displayMoviesID(movies)
       }
        } catch (error) {
          console.log(error)
        }
      }

      const displayMoviesID=(movies)=>{
        let row=document.querySelector(".row")
        row.innerHTML=""
        movies.forEach(singleMovie => {
    
    
          row.innerHTML+=`
          <div class="col-sm-6 col-md-3 col-lg-2">
     
          <img class="img-fluid" src="${singleMovie.imageUrl}" alt="">
        </div>
          `
        })
        }
