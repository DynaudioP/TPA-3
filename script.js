const link_api = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fe224c4f75040617c8fa82a240591985'
const Movie = document.getElementById("main")
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=fe224c4f75040617c8fa82a240591985&query=';
const gambar = 'https://image.tmdb.org/t/p/w500/'
const form = document.getElementById('find')
const search = document.getElementById('search')
const tagsEl = document.getElementById('tags')
const s = document.getElementById('p')


const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  var selectedGenre = []
  setGenre();
  function setGenre() {
      tagsEl.innerHTML= '';
      genres.forEach(genre => {
          const t = document.createElement('div');
          t.classList.add('tag');
          t.id=genre.id;
          t.innerText = genre.name;
          t.addEventListener('click', () => {
              if(selectedGenre.length == 0){
                  selectedGenre.push(genre.id);
              }else{
                  if(selectedGenre.includes(genre.id)){
                      selectedGenre.forEach((id, idx) => {
                          if(id == genre.id){
                              selectedGenre.splice(idx, 1);
                          }
                      })
                  }else{
                      selectedGenre.push(genre.id);
                  }
              }
              console.log(selectedGenre)
              ambilMovie(link_api + '&with_genres='+encodeURI(selectedGenre.join(',')))
          })
          tagsEl.append(t);
      })
  }  

ambilMovie(link_api)

async function ambilMovie(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
    tampil(data.results)

}



function tampil(film){
    Movie.innerHTML = ''
    film.forEach((movie) => {
        Movie.innerHTML += 
        `
        
        <div class="film">
            <img src="${gambar + movie.poster_path}" alt="movie" /> 
            <div class="mod">
            </div> 
            <div class="deskripsi">
                <h4>${movie.title}</h4>
                <p>${movie.release_date}</p>
                <div id="rating">
                    <i class="fa-regular fa-star" id="bintang"></i>
                    <p>${movie.vote_average}</p>
                </div>
                

            </div>         
        </div>
        `
        
    });
}
    




form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        ambilMovie(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

p.addEventListener('click', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        ambilMovie(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

