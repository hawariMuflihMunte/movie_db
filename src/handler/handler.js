const renderMovie = (_movie) => {
    // const _container = document.createElement("ul");
    const _container = document.getElementById("list-item");

    // _movie.forEach(movie => {
    //     const _list = document.createElement("li");
    //     _list.innerHTML = `<b>id:</b> ${movie.imdbID}<br/> <b>name:</b> ${movie.Title}`;
    //     _container.appendChild(_list);
    // });

    for (const m of _movie) {
        const _list = document.createElement("li");
        _list.innerHTML = `<b>id:</b> ${m.Title}<br/> <b>name:</b> ${m.Title}`;
        _container.appendChild(_list);
    }
};

export default renderMovie;