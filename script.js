document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.querySelector('.news-list');

    // Example news data
    const newsData = [
        { title: 'New Movie Announcement', date: 'April 10, 2024', content: 'Warner Bros announces a new blockbuster movie set to release later this year.' },
        { title: 'Upcoming Events', date: 'April 15, 2024', content: 'Stay tuned for exciting events and promotions from Warner Bros.' },
        { title: 'Behind-the-Scenes Feature', date: 'April 20, 2024', content: 'Go behind the scenes of our latest TV show production and meet the cast!' },
        // Add more news articles as needed
    ];

    // Populate news articles
    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const newsTitle = document.createElement('h3');
        newsTitle.textContent = news.title;

        const newsDate = document.createElement('span');
        newsDate.textContent = news.date;

        const newsContent = document.createElement('p');
        newsContent.textContent = news.content;

        // Append elements to news item
        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsDate);
        newsItem.appendChild(newsContent);

        // Append news item to news list
        newsList.appendChild(newsItem);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movieList');

    // Example movie data
    const moviesData = [
        { title: 'The Matrix', image: 'matrix.jpg', description: 'A mind-bending sci-fi thriller.' },
        { title: 'Inception', image: 'inception.jpg', description: 'Dreams within dreams. Leonardo DiCaprio stars.' },
        { title: 'Interstellar', image: 'interstellar.jpg', description: 'Explore space and time with Matthew McConaughey.' },
        // Add more movie data as needed
    ];

    // Populate movies
    moviesData.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const movieImage = document.createElement('img');
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        const movieDesc = document.createElement('p');
        movieDesc.textContent = movie.description;

        // Append elements to movie div
        movieDiv.appendChild(movieImage);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieDesc);

        // Append movie div to movie list
        movieList.appendChild(movieDiv);
    });
});

