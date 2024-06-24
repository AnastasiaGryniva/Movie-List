films = [];

const movieInput = document.getElementById('movieInput');

// зачеркивания текста при нажатии на кружок

function toggleWatched(films) {
    films.classList.toggle('checked');
    const movieTitle = films.nextElementSibling;
    movieTitle.classList.toggle('watched');
}

// удаления элемента списка при нажатии на крестик

function removeMovie(films) {
    const li = films.parentElement;
    li.remove();
    alert("Уверены что хотите удалить фильм?");
}

// добавления нового фильма в список

function addMovie() {
    const movieTitle = movieInput.value.trim();
    if (movieTitle === "") {
        alert("Введите название фильма");
        return;
    }

    const li = document.createElement('li');

    const circle = document.createElement('span');
    circle.className = 'circle';
    circle.onclick = function() { toggleWatched(this); };
    li.appendChild(circle);

    const title = document.createElement('span');
    title.className = 'movie-title';
    title.textContent = movieTitle;
    li.appendChild(title);

    const close = document.createElement('span');
    close.className = 'close';
    close.innerHTML = '&times;';
    close.onclick = function() { removeMovie(this); };
    li.appendChild(close);

    document.getElementById('movieList').appendChild(li);
    movieInput.value = "";
}




