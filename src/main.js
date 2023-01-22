async function getTrendingMoviesPreview(){
    const res   = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+API_KEY);

    const data  = await res.json();

    const movies = data.results;


    movies.forEach(movie => {
   
        //SELECT AND CREATING NODES
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
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
    const res   = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY+'&language=es');

    const data  = await res.json();

    const categories = data.genres;


    categories.forEach(category => {
   
        //SELECT AND CREATING NODES
        const previewCategoryContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer        = document.createElement('div');
        const categoryTitle            = document.createElement('h3');
        const categoryTitleText        = document.createTextNode(category.name);

        //CHANGES VALUES, ATRIBUTES, CLASES, ETC...
        categoryContainer.classList.add('categoryContainer');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id','id' + category.id);
        categoryTitle.appendChild(categoryTitleText );
        categoryContainer.appendChild(categoryTitle);
        previewCategoryContainer.appendChild(categoryContainer);

    
    });
}
getTrendingMoviesPreview();
getCategoriesPreview();