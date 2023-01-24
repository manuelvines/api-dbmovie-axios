const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    header:{
      'Content-Type':'application/json;charset=utf-8',
    },
    params: {
        'api_key':API_KEY,
        'language':'es',
    },
    
});


async function getTrendingMoviesPreview(){


   /**CONSUME WITH AXIOS */
   const response = await api('trending/movie/day'); 
   const movies = response.data.results;

   trendingPreviewMoviesContainer.innerHTML = "";
   movies.forEach(movie => {
   
        //SELECT AND CREATING NODES
        const movieContainer = document.createElement('div');
        const movieImg = document.createElement('img');
        
        //CHANGES VALUES, ATRIBUTES, CLASES, ETC...
        movieContainer.classList.add('movie-container');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',`https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });

}

async function getCategoriesPreview(){


        /**CONSUME WITH AXIOS */
        const response = await api('genre/movie/list'); 
        const categories = response.data.genres;

        previewCategoryContainer.innerHTML = "";


        categories.forEach(category => {
   
        //SELECT AND CREATING NODES
        //const previewCategoryContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer        = document.createElement('div');
        const categoryTitle            = document.createElement('h3');
        const categoryTitleText        = document.createTextNode(category.name);


        //CHANGES VALUES, ATRIBUTES, CLASES, ETC...
        categoryContainer.classList.add('categoryContainer');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id','id' + category.id);

        categoryTitle.addEventListener('click', () =>{

         
            //header-title.innerHTML =`PlatziMovies ${category.name}`;

            location.hash = '#category='+category.id + '-' + category.name
        });

        categoryTitle.appendChild(categoryTitleText );
        categoryContainer.appendChild(categoryTitle);
        previewCategoryContainer.appendChild(categoryContainer);
    });

}



async function getMoviesByCategory(id){



   /**CONSUME WITH AXIOS */
   const response = await api('discover/movie',{
    params:{
      with_genres: id
    },
   }); 
   const movies = response.data.results;

   console.log(movies);


   genericSection.innerHTML = "";

   movies.forEach(movie => {
   
        //SELECT AND CREATING NODES
        const movieContainer = document.createElement('div');
        const movieImg = document.createElement('img');
        
        //CHANGES VALUES, ATRIBUTES, CLASES, ETC...
        movieContainer.classList.add('movie-container');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',`https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieContainer.appendChild(movieImg);
        genericSection.appendChild(movieContainer);
    });


}
