const API_KEY = 'f5a1e3d617f4326a722342c84df9f432';
const API_URL = 'https://api.themoviedb.org/3/search/movie';
const keyWord = document.getElementById('query');
const movieName = document.getElementById('movies');
const getButton = document.getElementById('button');

function searchMovies() {
    let getTerm = keyWord.value;
    if (getTerm === "") {
        alert("Add a keyword");
    } else {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${getTerm}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                movieName.innerHTML = "";
               for (let i= 0; i < data.results.length; i++ ){

                //create elements
            const movieList = document.createElement ("div")

            const title = document.createElement("h1")
            title.textContent=data.results[i].title

            const overview = document.createElement("p")
            overview.textContent=data.results[i].overview

            const poster_path = document.createElement("img");
            poster_path.src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`;
            poster_path.alt = data.results[i].title;

            const popularity = document.createElement("em")
            popularity.textContent=data.results[i].popularity

            //add classlist
            title.classList.add("title")
            overview.classList.add("overview")
            popularity.classList.add("popularity")
            poster_path.classList.add("poster-image");

            //appendchild
            movieList.appendChild(title)
            movieList.appendChild(popularity)
            movieList.appendChild(overview)
            movieList.appendChild(poster_path)
            movieName.appendChild(movieList)


               }
            })
            .catch(error => console.error('Error:', error));
            
    }
}
getButton.addEventListener("click" ,searchMovies );

//Post request

//targetting DOM elements by id
const inputName= document.getElementById('name');
const inputDes = document.getElementById('description');
const postButton=document.getElementById('submit');

function postMovies(){
    event.preventDefault();//prevents the default behaviour.
    fetch('https://655ae8c96981238d054dd8b3.mockapi.io/movieDiscovery',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify ({
        "name": inputName.value,
        "description": inputDes.value,
    }), 
})
.then(res => res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err));
}

postButton.addEventListener("click",postMovies);


